using EvoWeb.Core;
using Microsoft.AspNetCore.Mvc;
using System.Net.Http;
using System.Threading.Tasks;

namespace EvoWeb.Controllers
{
    [Route("apimirror/v1/[controller]")]
    [ApiController]
    public class RegisterMirrorController : ControllerBase
    {

        public async Task<ApiResponse> Index(string username, string password, string firstname, string lastname, string email)
        {
            RegisterRequest registerrequest = new RegisterRequest();
            await registerrequest.GetDataFromApi(username, password, firstname, lastname, email);

            ApiResponse result = registerrequest.GetResult();

            if (result != null)
            {
                return result;
            }
            else
            {
                return new ApiResponse() { error = true, response = "backendfailure", sessionid = "" };
            }

        }


    }
}





