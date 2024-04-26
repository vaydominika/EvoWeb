using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace EvoWeb.Core
{
    public class CheckSessionRequest
    {
        public SessionResponse result;
        public async Task<ActionResult> GetDataFromApi(string sessionid)
        {
            // Példa API URL
            string apiUrl = "https://evoweb-api.reigdev.hu/api/v1/CheckSession/?sessionid=" + sessionid;

            try
            {
                // HTTP kliens létrehozása
                using (HttpClient httpClient = new HttpClient())
                {
                    // API hívása és válasz visszakapása
                    HttpResponseMessage response = await httpClient.GetAsync(apiUrl);

                    // Ha a válasz sikeres
                    if (response.IsSuccessStatusCode)
                    {
                        // JSON válasz kiolvasása
                        string jsonResult = await response.Content.ReadAsStringAsync();

                        SessionResponse responseObject = JsonConvert.DeserializeObject<SessionResponse>(jsonResult);

                        // JSON válasz visszaadása a nézetnek
                        result = responseObject;
                    }
                    else
                    {
                        return null;
                    }
                }
            }
            catch (HttpRequestException)
            {

            }

            return null;
        }


        public SessionResponse GetResult() { return result; }
    }
}
