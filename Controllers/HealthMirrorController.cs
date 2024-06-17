using EvoWeb.Core;
using Microsoft.AspNetCore.Mvc;

namespace EvoWeb.Controllers
{
    [Route("apimirror/v1/[controller]")]
    [ApiController]
    public class HealthMirrorController : ControllerBase
    {

        public async Task<GenericResponse> Index()
        {
            HealthRequest checkprofile = new HealthRequest();
            await checkprofile.GetDataFromApi();

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
