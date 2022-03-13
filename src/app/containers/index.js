import { HeaderComponent, FooterComponent, ContentComponent } from "../../components/layouts/";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../../assets/app.less"
function dashboardApp() {
  return (
    <div className="container-fluid">
      <HeaderComponent /> 
      <ContentComponent/>
      <FooterComponent/>   
    </div>

  );
}

export default dashboardApp;