
export default function Card({title="Puma"}) {
    return (
        <div className="card bg-base-100 w-96 shadow-sm bg-amber-50 text-black rounded-2xl">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-black font-bold">{title}</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary text-white">Buy Now</button>
    </div>
  </div>
</div>
    );
}