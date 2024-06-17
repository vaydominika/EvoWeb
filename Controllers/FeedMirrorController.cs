using EvoWeb.Core;
using Microsoft.AspNetCore.Mvc;

namespace EvoWeb.Controllers
{
    [Route("apimirror/v1/[controller]")]
    [ApiController]
    public class FeedMirrorController : ControllerBase
    {

        public async Task<FeedResponse> Index(string sessionid)
        {
            FeedRequest checkprofile = new FeedRequest();
            await checkprofile.GetDataFromApi(sessionid);

            FeedResponse result = checkprofile.GetResult();

            if (result != null)
            {
                return result;
            }
            else
            {
                return new FeedResponse() { error = true, response = "backendfailure", feed = "" };
            }

        }


    }
}
