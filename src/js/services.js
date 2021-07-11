function servicesEvent(e) {
    let service;
    if (e.target.tagName == "P") {
        service = e.target.parentElement;
    } else {
        service = e.target;
    }

    if (service.classList.contains("selected")) {
        service.classList.remove("selected");
        const idService = parseInt(service.dataset.idService);
        removeService(idService);
    } else {
        service.classList.add("selected");
        const data = {
            id: parseInt(service.dataset.idService),
            nombre: service.firstElementChild.textContent,
            precio: service.firstElementChild.nextElementSibling.textContent
        }
        addService(data);

    }

    console.log(package.services);

}



function addService(service) {
    const { services } = package;
    package.services = [...services, service];
}

function removeService(idService) {
    const { services } = package;
    package.services = services.filter(service => service.id != idService);
}