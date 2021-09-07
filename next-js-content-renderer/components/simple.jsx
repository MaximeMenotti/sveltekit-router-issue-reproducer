import React, {useState} from "react";

function Simple() {
  const [visible, setVisible] = useState(false);

  return (<div id="8d507b01-8550-4965-be6c-169628d49442" className="brick-adapter-content is-preview">
    <div className="brick-adapter-presenter-container no-hover">
      <div className="brick-adapter-presenter">
        <div className="brick-presenter brick-header-presenter">
          <article
            className="dkt-columns dkt-header dkt-full dkt-title-italic dkt-title-uppercase dkt-secondary-color dkt-out-of-wrapper dkt-background-poi-mobile dkt-text-center-mobile-only dkt-remove-flex dkt-skew-media-background"
            style={{ height: "483.5px", position: "relative", transition: "height 0.1s ease 0s" }}>
            <div className="dkt-column dkt-content-container dkt-is-full" style={{position: 'absolute'}}>
              <div>
                <div className="dkt-column dkt-title dkt-is-9">
                  <div className="editable-html-text">
                    <div className="text-container">
                      <div className="rendered-text-block-border"></div>
                      <div className="rendered-text-block">Le batonning est il vraiment un sport ?</div>
                    </div>
                  </div>
                </div>
                <div className="dkt-description dkt-column dkt-is-9">
                  <div className="editable-html-text">
                    <div className="text-container">
                      <div className="rendered-text-block-border"></div>
                      <div className="rendered-text-block">Pourtant incoutournable, le batonning est toujours difficilement considérer comme un sport</div>
                    </div>
                  </div>
                </div>
                <div className="dkt-cta-container dkt-column dkt-is-12">
                  <div className="">
                    <div className="editable-element editable-button">
                      <a className="dkt-cta" href="https://www.decathlon.de/sport/c0-alle-sportarten-a-z/c1-klettern/_/N-1fkofjg" target="_blank" rel="noreferrer">
                      <div className="editable-html-text">
                        <div className="text-container">
                          <div className="rendered-text-block-border"></div>
                          <div className="rendered-text-block">Test de lien</div>
                        </div>
                      </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="dkt-column dkt-media-container dkt-is-full" style={{ position: 'absolute', height: '100%'}}>
              <figure className="dkt-media" style={{height: '100%', margin: 0}}>
                <picture style={{height: '100%'}}>
                  <source media="(min-width: 1080px)"
                          srcSet="https://contents.mediadecathlon.com/p1342554/k$27e981be28df794fd5b5ccc6cae430c1/1600x0/3000pt1688/6000xcr2870/default.jpg"
                          style={{height: '100%', objectFit: 'cover'}} />
                  <source media="(min-width: 800px)"
                          srcSet="https://contents.mediadecathlon.com/p1342554/k$27e981be28df794fd5b5ccc6cae430c1/1080x0/3000pt1688/6000xcr3000/default.jpg"
                          style={{height: '100%', objectFit: 'cover'}}  />
                  <img
                    src="https://contents.mediadecathlon.com/p1342554/k$27e981be28df794fd5b5ccc6cae430c1/800x0/3000pt1688/3375xcr3375/default.jpg"
                    alt="Der Walser Klettersteig - Erlebnisklettern im Kleinwalstertal"
                    style={{height: '100%', objectFit: 'cover'}}  />
                </picture>
              </figure>
            </div>
          </article>
        </div>
      </div>
    </div>
    <button onClick={() => setVisible(!visible)}>Toggle visible</button>
    {visible && <p>JE SUIS VISIBLE !! 🤓</p>}
  </div>
  )
}

export default Simple
