function ProjectList({ images }) {
    return (
        <div className="projects">
            {images.map((image) => (
                <figure key={image.id} className="projects__item">
                    <img className="projects__image" src={image.img} alt="" />
                </figure>
            ))}
        </div>
    )
}

export default ProjectList
