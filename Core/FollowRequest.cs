using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace EvoWeb.Core
{
    public class FollowRequest
    {
        public GenericResponse result;
        public async Task<ActionResult> GetDataFromApi(string sessionid, string targetusername)
        {
            // Példa API URL
            string apiUrl = "https://evoweb-api.reigdev.hu/api/v1/Follow/?sessionid=" + sessionid + "&targetusername=" + targetusername;

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

                        GenericResponse responseObject = JsonConvert.DeserializeObject<GenericResponse>(jsonResult);

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


        public GenericResponse GetResult() { return result; }
    }
}
