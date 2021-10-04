
import "./Description.css"

export default function Description() {


  return (
    <div className="description">
      <img className="descriptionImage" src="55510c2d0710e.jpg"></img>
      <div className="text descriptionText">
        <div>
          Playlist
        </div>
        <div className="text mainDescription">
          10 year Anniversary: Behind-the-Scenes of "The Drunken Dance of Modern Man in Love"
        </div>
        <div className="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum nunc eu sapien tincidunt vehicula. Ut convallis in purus eu cursus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas semper est vitae dolor vehicula.
        </div>
        <div className="text">
          Created by: Yan Kavalenkau 24 songs, 55 min
        </div>
        <div className="text">
          <button className="buttonPause">Pause</button>
          <button className="buttonEllipsis">...</button>
        </div>

      </div>
    </div>
  )
}