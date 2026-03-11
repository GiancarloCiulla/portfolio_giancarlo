import React, { useState } from "react";

const ProjectCard = ({ project }) => {
    const [videoFailed, setVideoFailed] = useState(false);

    const {
        title,
        shortTitle,
        image,
        featuredVideo,
        featuredImage,
        fallbackLabel,
        summary,
        problem,
        stack,
        contribution,
        learnings,
        privateNotice,
        statusTags,
        featured
    } = project;

    const mediaImage = featuredImage || image;
    const shouldRenderVideo = Boolean(featuredVideo) && !videoFailed;

    return (
        <article className={`project-card ${featured ? "featured" : "secondary"}`}>
            <div className="project-media" aria-label={`Vista previa de ${shortTitle}`}>
                <div className={`project-image-wrapper ${featured ? "is-featured" : "secondary-media-wrapper"}`}>
                    {shouldRenderVideo ? (
                        <video
                            src={featuredVideo}
                            poster={mediaImage}
                            autoPlay
                            muted
                            loop
                            playsInline
                            preload="metadata"
                            onError={() => setVideoFailed(true)}
                        />
                    ) : (
                        <img
                            src={mediaImage}
                            alt={title}
                            loading="lazy"
                            onError={(event) => {
                                event.currentTarget.style.display = "none";
                            }}
                        />
                    )}
                </div>
                <span className="project-fallback">{fallbackLabel}</span>
            </div>

            <div className="project-content">
                <div className="project-tags">
                    {statusTags.map((tag) => (
                        <span key={tag}>{tag}</span>
                    ))}
                </div>

                <h3>{title}</h3>
                <p>{summary}</p>
                <p className="project-problem">{problem}</p>

                <div className="project-stack">
                    {stack.map((item) => (
                        <span key={item}>{item}</span>
                    ))}
                </div>

                <div className="project-contribution">
                    <h4>Aportacion</h4>
                    <ul>
                        {contribution.map((point) => (
                            <li key={point}>{point}</li>
                        ))}
                    </ul>
                </div>

                {learnings && <p className="project-learnings">Aprendizajes: {learnings}</p>}

                {privateNotice && <p className="project-confidential">{privateNotice}</p>}
            </div>
        </article>
    );
};

export default ProjectCard;
