import React from 'react';

import { StyledIcon } from './styles';

interface IconInterface {
  icon: string
}

const Icon: React.FC<IconInterface> = ({icon, children}) => {
  let color = "#fff";

  const FacebookBackground = "linear-gradient(to right, #0546A0 0%, #663fb6 100%)";
  const InstagramBackground = "linear-gradient(to right, #A12AC4 0%, #ED586c 40%, #F0A853 100%)";
  const EmailBackground = "linear-gradient(to right, #bb001b 20%, #EA4335 100%)";

  switch (icon) {
    case "facebook":
      color = FacebookBackground;  
    break;
    case "instagram":
      color = InstagramBackground;  
    break;
    case "email":
      color = EmailBackground;  
    break;
  
    default:
      break;
  }

  return (
    <StyledIcon background={color}>
      {children}
    </StyledIcon>
  );
};

export default Icon;
