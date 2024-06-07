using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace EvoWeb.Core
{
    public class SetProfileRequest
    {
        public GenericResponse result;
        public async Task<ActionResult> GetDataFromApi(string sessionid, string bio, string location, string avatarurl, string bannerurl, string dateofbirth, string displayname, string pronouns)
        {
            // Példa API URL
            string apiUrl = "https://evoweb-api.reigdev.hu/api/v1/SetProfile/?sessionid=" + sessionid + "&bio=" + bio + "&location=" + location + "&avatarurl=" + avatarurl + "&bannerurl=" + bannerurl + "&dateofbirth=" + dateofbirth + "&displayname=" + displayname + "&pronouns=" + pronouns;

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
