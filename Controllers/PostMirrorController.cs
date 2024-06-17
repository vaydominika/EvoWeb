using EvoWeb.Core;
using Microsoft.AspNetCore.Mvc;

namespace EvoWeb.Controllers
{
    [Route("apimirror/v1/[controller]")]
    [ApiController]
    public class PostMirrorController : ControllerBase
    {

        public async Task<GenericResponse> Index(string sessionid, string body)
        {
            PostRequest checkprofile = new PostRequest();
            await checkprofile.GetDataFromApi(sessionid, body);

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
