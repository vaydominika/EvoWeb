using EvoWeb.Core;
using Microsoft.AspNetCore.Mvc;

namespace EvoWeb.Controllers
{
    [Route("apimirror/v1/[controller]")]
    [ApiController]
    public class LikeMirrorController : ControllerBase
    {

        public async Task<GenericResponse> Index(string sessionid, int postid)
        {
            LikeRequest checkprofile = new LikeRequest();
            await checkprofile.GetDataFromApi(sessionid, postid);

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
