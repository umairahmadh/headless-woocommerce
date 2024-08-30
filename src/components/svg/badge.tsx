import { Icon } from '@src/components/svg';

export const Badge = ({ strokeColor, className }: Partial<Icon>) => {
  return (
    <svg
      className={`inline ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke={strokeColor}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6.391 10.544c0-1.094.31-2.165.895-3.08a5.365 5.365 0 0 1 2.382-2.042 5.101 5.101 0 0 1 4.063 0 5.365 5.365 0 0 1 2.383 2.042 5.748 5.748 0 0 1 .017 6.136l2.394 4.372-2.521-.5L15.197 20l-2.222-4.075a5.09 5.09 0 0 1-2.55 0L8.203 20l-.807-2.53-2.521.502L7.269 13.6a5.72 5.72 0 0 1-.878-3.056v0Z"
        clipRule="evenodd"
      />
      <path
        stroke={strokeColor}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11.45 8.327a.278.278 0 0 1 .25-.16c.107 0 .204.062.25.16l.518 1.046c.039.08.11.136.195.154l1.085.223c.099.024.179.1.21.199.032.1.01.208-.056.288l-.774.9a.305.305 0 0 0-.07.233l.143 1.218a.293.293 0 0 1-.114.275.277.277 0 0 1-.291.025l-.975-.508a.27.27 0 0 0-.252 0l-.975.508a.277.277 0 0 1-.29-.025.293.293 0 0 1-.115-.275l.143-1.215a.305.305 0 0 0-.07-.233l-.774-.9a.306.306 0 0 1-.055-.294.295.295 0 0 1 .22-.196l1.084-.224a.284.284 0 0 0 .195-.154l.518-1.045Z"
        clipRule="evenodd"
      />
      <path
        fill={strokeColor}
        d="M7.902 13.198a.75.75 0 0 0-1.266.804l1.266-.804Zm.05 1.27.541-.518-.002-.003-.54.52Zm2.17 1.372.235-.713h-.001l-.234.713Zm.12.816a.75.75 0 1 0 .375-1.452l-.375 1.452Zm6.522-2.654a.75.75 0 1 0-1.266-.804l1.266.804Zm-1.315.466-.54-.52-.002.002.542.518Zm-2.171 1.372-.234-.713.233.713Zm-.495-.636a.75.75 0 0 0 .375 1.452l-.375-1.452Zm-6.147-1.202c.225.355.485.685.775.986l1.08-1.04a4.755 4.755 0 0 1-.59-.75l-1.265.804Zm.773.984a6.022 6.022 0 0 0 2.48 1.567l.467-1.426a4.522 4.522 0 0 1-1.863-1.177L7.41 14.986Zm2.48 1.566c.116.039.234.073.353.104l.375-1.452a4.141 4.141 0 0 1-.26-.077l-.469 1.425Zm5.61-3.354c-.172.27-.37.52-.59.75l1.08 1.04c.29-.3.55-.631.775-.986l-1.266-.804Zm-.592.752c-.52.543-1.16.947-1.863 1.177l.467 1.426a6.022 6.022 0 0 0 2.48-1.567l-1.084-1.036Zm-1.864 1.177a4.124 4.124 0 0 1-.26.077l.375 1.452c.119-.03.237-.065.354-.104l-.469-1.425Z"
      />
    </svg>
  );
};