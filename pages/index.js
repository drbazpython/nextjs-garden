import Head from 'next/head'
import Link from 'next/link'
import { sanityClient, urlFor } from "../lib/sanity";

/* https://www.sanity.io/docs/how-queries-work */
const gardenQuery = '*[_type == "garden"]{_id,name,slug,plantImage}';

export default function Home( { garden } ) {

  return (
    <div>
      <Head>
        <title>My Garden 🌻</title>
      </Head>
    <h1>Welcome to My Garden</h1>
    <ul className="plants-list">
      {garden.map((garden) => (
      <li key={garden._id} className="plant-card">
        <Link href={`/plants/${garden.slug.current}`}>
        <a>
          <img src={urlFor(garden.plantImage).url()} />
          <span>{garden.name}</span>
        </a>
        </Link>
      </li>
      ))}
    </ul>
    
    </div>
  )
}
/**
 * 
 * @returns data:garden
 */
export async function getStaticProps() {
  const garden = await sanityClient.fetch(gardenQuery);

  return{
    props: { garden }};
}

  
