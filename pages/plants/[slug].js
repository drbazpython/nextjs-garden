/** dynamic routing based on slug*/
import { sanityClient, urlFor, PortableText, usePreviewSubscription} from "../../lib/sanity"
import { LitElement, html, css } from "lit";


class MyGarden extends LitElement{
    constructor(){
        super();
        this.plant = garden.name;
    }
    static get properties(){
        return{
            name: { type: String }
        };
    }

    render(){
            return html`
                <div class="card">   
                        <h3> <b> ${this.name} </b> </h3>
                    </div>
                </div>
            `;
        }
    
    
    static get styles(){
        return css`
            .card{
                box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
                transition: 0.3s;
                border-radius: 5px;
                width: 100px;
            }
        `;
    }
}

customElements.define('mygarden',MyGarden);

const gardenQuery ='*[_type == "garden" && slug.current ==$slug][0]'+
'{_id,name,slug,typeofplant,plantImage}';

export default function OnePlant({data}){
    if (!data) return <div>Loading.....</div>;
    console.log("DATA: "+ data);
    const  { garden } = data;
    console.log("GARDEN: " + garden);
    return(
        <article>
            <h1>{garden.name}</h1>
            <main>
                <img src={urlFor(garden.plantImage).url()}/>
                <div>

                    <ul>
        
                        <li>{garden.typeofplant}</li>

                    </ul>

                </div>
            </main>
        </article>


    );

}

export async function getStaticPaths(){
    /** lits of dynamic paths */
    const paths = await sanityClient.fetch(
        `*[_type == "garden" && defined(slug.current)]{"params":{"slug":slug.current}}`);
    //console.log ("PATHS: "+ paths);
    return {
        paths,
        fallback: false,
    };

}

export async function getStaticProps({params}){
    //console.log("PARAMS: " + params)
    /** const {slug} is the replacement for the [slug].js */
    const { slug } = params;
    //console.log("SLUG: " + slug)
    const garden = await sanityClient.fetch(gardenQuery,{slug});
    console.log("GARDEN: "+garden);
    return {props:{ data : { garden }}};


}