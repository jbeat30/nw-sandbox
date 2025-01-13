import MentorCardImage from '../assets/images/mentor-card-sample.png';

export function MentorCard() {
  const imageSrc:string = typeof MentorCardImage === 'object' ? MentorCardImage?.src : MentorCardImage;
  // console.log(MentorCardImage)
  // {
  //   src: '/_next/static/media/mentor-card-sample.81d41389.png',
  //     width: 367,
  //     height: 290,
  //     blurDataURL: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAAqElEQVR42l2Jyw7BQAAA96P9gCM/4EhIJA3hJiHxiAPi0ItIPIJGdym2W3FR1XaUo8NkMhkR+mdOSqKUwjeGNE1/JElKFCcI96KZLXcMRmPstYMjJb1+F6tWptW0EPZqT70zpF2v0OoOsBcLGlaVcj5HqVBEeNqwOXroIODgung3zdaRzMYjppM5wjd3LldN+HrzzDD3B1KdCTJ/W0RRNp4hr8zRO+a/P6ParJyB65oRAAAAAElFTkSuQmCC',
  //     blurWidth: 8,
  //     blurHeight: 6
  // }

  return (
      <div>
        <img src={imageSrc} alt="멘토 카드 샘플" />
      </div>
  );
}