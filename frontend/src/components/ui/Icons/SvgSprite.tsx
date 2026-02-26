export default function SvgSprite() {
  return (
    <svg style={{ display: "none" }} xmlns="http://www.w3.org/2000/svg">
      <symbol id="icon-mail" viewBox="0 0 24 24">
        <path d="M0,3v18h24V3H0z M19.3,5.7L12,12.1L4.7,5.7H19.3z M2.4,18.8V7.1l9.6,7.4l9.6-7.4v11.7H2.4z"></path>
      </symbol>
      <symbol id="icon-spinner" viewBox="0 0 24 24">
        <style>
          {`.spinner {
        			transform-origin: center;
       				animation: spin .75s infinite linear;
      			}
      			@keyframes spin {
        			100% { transform: rotate(360deg); }
      			}`}
        </style>
        <path
          className="spinner"
          d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"
          fill="currentColor"
        />
      </symbol>
      <symbol>
        <path
          id="icon-menu"
          d="M3 12H21M3 6H21M3 18H21"
          viewBox="0 0 24 24"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </symbol>
    </svg>
  );
}
