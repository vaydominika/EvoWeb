using Microsoft.Extensions.Primitives;
using System;
using System.Net.Http;
using System.Threading.Tasks;

namespace EvoWeb.Core.Session
{
    public class Session
    {
        public async static Task<bool> IsAuthenticated(string sessionid) 
        {
            // Az HttpClient inicializálása
            using (HttpClient client = new HttpClient())
            {
                try
                {
                    // A kérés összeállítása, ide beleteszed a sessionid-t
                    string sessionID = sessionid;
                    string url = "https://evoweb-api.reigdev.hu/api/v1/CheckSession/?sessionid=" + sessionid;

                    // A kérés elküldése
                    HttpResponseMessage response = await client.GetAsync(url);

                    // Ellenőrizni, hogy a kérés sikeres volt-e
                    if (response.IsSuccessStatusCode)
                    {
                        // A válasz beolvasása JSON formátumban
                        string jsonResponse = await response.Content.ReadAsStringAsync();

                        // A JSON válasz deszerializálása
                        SessionResponse responseObject = Newtonsoft.Json.JsonConvert.DeserializeObject<SessionResponse>(jsonResponse);

                        // Az "error" mező kiolvasása és kezelése
                        bool isError = responseObject.valid;

                        return isError;

                        // Most már itt dolgozhatsz az isError változóval
                    }
                    else
                    {
                        // Ha a kérés nem volt sikeres
                        Console.WriteLine("A kérés nem volt sikeres. Státuszkód: " + response.StatusCode);
                    }
                }
                catch (Exception ex)
                {
                    // Kezeljük a hibákat
                    Console.WriteLine("Hiba történt: " + ex.Message);
                }
            }

            return false;
        }
    }
}
