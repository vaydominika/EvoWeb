using EvoWeb.Core;
using Microsoft.AspNetCore.Mvc;

namespace EvoWeb.Controllers
{
    [Route("apimirror/v1/[controller]")]
    [ApiController]
    public class SetProfileMirrorController : ControllerBase
    {

        public async Task<GenericResponse> Index(string sessionid, string bio, string location, string avatarurl, string bannerurl, string dateofbirth, string displayname, string pronouns)
        {
            SetProfileRequest checkprofile = new SetProfileRequest();
            await checkprofile.GetDataFromApi(sessionid, bio, location, avatarurl, bannerurl, dateofbirth, displayname, pronouns);

            GenericResponse result = checkprofile.GetResult();

            if (result != null)
            {
                return result;
            }
            else
            {
                return new GenericResponse() { error = true, response = "backend-failure" };
            }

        }


    }
}
