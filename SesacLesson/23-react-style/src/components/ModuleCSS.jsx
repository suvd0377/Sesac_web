import classnames from './';
import style from '../style/style.module.css';
import Names from 'classnames/binds';
export default function () {
  const setting = Names.bind(style);
  return (
    <div className={style.container}>
      <h4>Module CSS 적용</h4>
      <div className={style.box2}>
        <div>안녕하세요</div>
      </div>
      <br />
      <div className={`${style.first} ${style.second}`}>
        틀래스를 여러개 지정하는 방법1(템플릿 리터럴)
      </div>
      {/* 
      [1,2,3,4,5].join("-") >> 1-2-3-4-5
      ["first", "second"].join(" ") >> "first second" 뛰어쓰기
      */}
      <div className={[style.first, style.second].join(' ')}>
        틀래스를 여러개 지정하는 방법2(배열과 join이용)
      </div>
      <div className={classnames(style.first, style.second)}>
        틀래스를 여러개 지정하는 방법3(classnames 모듈 설치)
      </div>
      <div className={setting('first', 'second')}>
        classnames 모듈 사용해보기{' '}
      </div>
    </div>
  );
}
