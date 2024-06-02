using EvoWeb.Core;
using Microsoft.AspNetCore.Mvc;

namespace EvoWeb.Controllers
{
    [Route("apimirror/v1/[controller]")]
    [ApiController]
    public class UnFollowMirrorController : ControllerBase
    {

        public async Task<GenericResponse> Index(string sessionid, string targetusername)
        {
            UnFollowRequest checkprofile = new UnFollowRequest();
            await checkprofile.GetDataFromApi(sessionid, targetusername);

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
