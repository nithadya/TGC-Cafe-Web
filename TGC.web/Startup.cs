using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(TGC.web.Startup))]
namespace TGC.web
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
