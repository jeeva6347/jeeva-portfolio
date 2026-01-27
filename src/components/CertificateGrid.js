import Certificate from "./Certificate"; 
import CertificateData from "./CertificateData"; 
function CertificateGrid() {
    return(
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
{CertificateData.map((certificate, index)=>(
<Certificate 
key={index}
image={certificate.image}
link={certificate.link}

/>
)
)}


   
</div>
    );
    
}
export default CertificateGrid; 