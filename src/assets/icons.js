const AddFile = (props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11 1C11 0.447716 11.4477 0 12 0C12.5523 0 13 0.447715 13 1V23C13 23.5523 12.5523 24 12 24C11.4477 24 11 23.5523 11 23V1Z"
        fill="#666F7C"
      />
      <path
        d="M23 11C23.5523 11 24 11.4477 24 12C24 12.5523 23.5523 13 23 13L1 13C0.447716 13 -2.41411e-08 12.5523 0 12C2.41411e-08 11.4477 0.447715 11 1 11L23 11Z"
        fill="#666F7C"
      />
    </svg>
  );
};
const YellowHeart = () => {
  return (
    <svg
      width="35"
      height="33"
      viewBox="0 0 35 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_f_310_4123)">
        <path
          d="M23.3077 15.7259L17.1024 22.5002L10.897 15.7259C9.6585 14.3738 9.70835 12.2947 11.0103 11.0027C12.4639 9.55999 14.8585 9.69161 16.1427 11.2848L17.1024 12.4753L18.062 11.2848C19.3463 9.69161 21.7408 9.55999 23.1945 11.0027C24.4964 12.2947 24.5462 14.3738 23.3077 15.7259Z"
          fill="#FFE336"
          fill-opacity="0.5"
        />
      </g>
      <path
        d="M23.3077 15.7259L17.1024 22.5002L10.897 15.7259C9.6585 14.3738 9.70835 12.2947 11.0103 11.0027C12.4639 9.55999 14.8585 9.69161 16.1427 11.2848L17.1024 12.4753L18.062 11.2848C19.3463 9.69161 21.7408 9.55999 23.1945 11.0027C24.4964 12.2947 24.5462 14.3738 23.3077 15.7259Z"
        fill="#FFE336"
      />
      <defs>
        <filter
          id="filter0_f_310_4123"
          x="0"
          y="0"
          width="34.2051"
          height="32.5"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="5"
            result="effect1_foregroundBlur_310_4123"
          />
        </filter>
      </defs>
    </svg>
  );
};

export { AddFile, YellowHeart };
