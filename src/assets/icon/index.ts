// svgr을 이용해 svg파일을 컴포넌트로 사용했습니다.
// 개발 과정에서 빠른 emmet을 위해 svgr 통합 파일을 만들어 관리했습니다.
// 참고로 svg, img파일을 ts/js 파일에서 import하여 사용하는 경우엔 Webpack로더가 처리하는 브라우저 로직이기 때문에 클라이언트 컴포넌트로 사용해야합니다.
import SmallPlusIcon from "./small-plus-icon.svg";
import CancelIcon from "./cancel-icon.svg";
import CheckIcon from "./check-icon.svg";

export { SmallPlusIcon, CancelIcon, CheckIcon };
