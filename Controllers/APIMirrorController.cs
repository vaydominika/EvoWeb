using EvoWeb.Core;
using Microsoft.AspNetCore.Mvc;
using System.Net.Http;
using System.Threading.Tasks;

namespace EvoWeb.Controllers
{
    [Route("apimirror/v1/[controller]")]
    [ApiController]
    public class APIMirrorController : ControllerBase
    {

        public async Task<ApiResponse> Index(string username, string password)
        {
            LoginRequest loginRequest = new LoginRequest();
            await loginRequest.GetDataFromApi(username, password);

            ApiResponse result = loginRequest.GetResult();

            if (result.error == false)
            {
                CookieManager.CreateCookie(HttpContext, "session_id", result.sessionid, 365);
                CookieManager.CreateCookie(HttpContext, "self", username, 365);
            }

            if (result != null)
            {
                return result;
            }
            else
            {
                return new ApiResponse() { error = true, response = "backendfailure", sessionid="" };
            }

        }


    }
}
  



