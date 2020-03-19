export function inject(){
	// Get any script tag with type text/javascript from homepage
	fetch("/")
		.then(response => response.text())
		.then(html => {
			const f = document.createElement("html");
			f.innerHTML = html;
			
			if (document.querySelector(".css-1jl34xb-PreviewPaneFrame").contentDocument){
				const iframedocument = document.querySelector(".css-1jl34xb-PreviewPaneFrame").contentDocument;
			}else{
				const iframedocument = document.querySelector(".css-1jl34xb-PreviewPaneFrame").contentWindow.document;
			}
			//const iframedocument = document.querySelector(".css-1jl34xb-PreviewPaneFrame").contentWindow.document;
			//console.log(document.querySelector(".css-1jl34xb-PreviewPaneFrame"));
			Array.from(f.getElementsByTagName("script")).forEach(tag => {
				if (tag.type == "text/javascript") {
					
					const script = document.createElement("script");
			
					script.src = tag.src;
					script.async = true; 
				
					iframedocument.body.appendChild(script);
			  
				}
			});
		});
}
