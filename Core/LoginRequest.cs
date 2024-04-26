using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace EvoWeb.Core
{
    public class LoginRequest
    {
        public ApiResponse result;
        public async Task<ActionResult> GetDataFromApi(string username, string password)
        {
            // Példa API URL
            string apiUrl = "https://evoweb-api.reigdev.hu/api/v1/Login/?username=" + username + "&password=" + password;

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

                        ApiResponse responseObject = JsonConvert.DeserializeObject<ApiResponse>(jsonResult);

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


        public ApiResponse GetResult() { return result; }
    }
}
