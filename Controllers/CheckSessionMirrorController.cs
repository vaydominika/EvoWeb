using EvoWeb.Core;
using Microsoft.AspNetCore.Mvc;
using System.Net.Http;
using System.Threading.Tasks;

namespace EvoWeb.Controllers
{
    [Route("apimirror/v1/[controller]")]
    [ApiController]
    public class CheckSessionMirrorController : ControllerBase
    {

        public async Task<SessionResponse> Index(string sessionid)
        {
            CheckSessionRequest checksession = new CheckSessionRequest();
            await checksession.GetDataFromApi(sessionid);

            SessionResponse result = checksession.GetResult();     

            if (result != null)
            {
                return result;
            }
            else
            {
                return new SessionResponse() { valid = false, response = "backendfailure"};
            }

        }


    }
}
