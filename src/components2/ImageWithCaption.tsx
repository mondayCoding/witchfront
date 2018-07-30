
import * as React from 'react';

interface Iprops {
	src:string;
	captionText?:string;
	captionTitle?:string;
	size?: string;
}

//*****************************************************************************************************************
// Image caption component with hover effect ( caption and captiontitle are optional )
//*****************************************************************************************************************

export default class ImgCaption extends React.Component<Iprops> {


	public render() {

		const { src, captionText, captionTitle, size, ...rest } = this.props;
		let imageSize = size || "all";
		let captionClassname = "imageCaptionWrapper " + imageSize;

		return (
			<figure className={captionClassname}>

					<img className="imageWithCaption" alt={captionText} src={src} {...rest} />
					<figcaption className="imageCaption">
						{captionTitle && <b>{captionTitle}</b>}
						{captionText && <span>{captionText}</span>}
					</figcaption>
				
			</figure>
		);
	}

}
