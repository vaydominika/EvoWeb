using EvoWeb.Core;
using Microsoft.AspNetCore.Mvc;

namespace EvoWeb.Controllers
{
    [Route("apimirror/v1/[controller]")]
    [ApiController]
    public class ProfileMirrorController : ControllerBase
    {

        public async Task<ProfileResponse> Index(string sessionid, string profileusername)
        {
            ProfileRequest checkprofile = new ProfileRequest();
            await checkprofile.GetDataFromApi(sessionid, profileusername);

            ProfileResponse result = checkprofile.GetResult();

            if (result != null)
            {
                return result;
            }
            else
            {
                return new ProfileResponse() { error = true, response = "backendfailure" };
            }

        }


    }
}

