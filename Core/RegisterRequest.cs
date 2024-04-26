using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace EvoWeb.Core
{
    public class RegisterRequest
    {
        public ApiResponse result;
        public async Task<ActionResult> GetDataFromApi(string username, string password, string firstname, string lastname, string email)
        {
            // Példa API URL
            string apiUrl = "https://evoweb-api.reigdev.hu/api/v1/Register/?username=" + username + "&password=" + password + "&firstname=" + firstname + "&lastname=" + lastname + "&email=" + email;

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
