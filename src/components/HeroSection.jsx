function HeroSection() {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full p-10 mt-14">
        <div className="flex flex-col items-center gap-2 w-[430px] mb-5">
          <h1>
            <svg
              width="195"
              height="30"
              viewBox="0 0 195 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.58203 26.7344C5.95703 26.2188 6.36719 25.832 6.8125 25.5742C7.28125 25.3164 7.75 25.1055 8.21875 24.9414C8.71094 24.7773 9.19141 24.625 9.66016 24.4844C10.1523 24.3203 10.6328 24.0625 11.1016 23.7109C11.3594 23.5703 11.7227 23.3594 12.1914 23.0781C12.6602 22.7969 13.1172 22.4922 13.5625 22.1641C14.0313 21.8125 14.4297 21.4727 14.7578 21.1445C15.1094 20.8164 15.2852 20.5352 15.2852 20.3008C15.2852 20.2773 15.2734 20.2656 15.25 20.2656C15.2031 20.2656 15.1797 20.2539 15.1797 20.2305L15.1094 20.1602C14.9922 20.1133 14.8047 20.0547 14.5469 19.9844C14.2891 19.9141 14.1367 19.8672 14.0898 19.8438C11.0664 19.4922 8.62891 19.1875 6.77734 18.9297C4.94922 18.6484 3.53125 18.3555 2.52344 18.0508C1.53906 17.7461 0.882813 17.3945 0.554688 16.9961C0.226563 16.5977 0.0625001 16.0938 0.0625001 15.4844C0.0625001 15.25 0.109375 14.9922 0.203125 14.7109C0.296875 14.4297 0.402344 14.1484 0.519531 13.8672C0.660156 13.5859 0.800781 13.3281 0.941406 13.0938C1.08203 12.8594 1.21094 12.6719 1.32813 12.5313C1.70313 12.0625 2.19531 11.6406 2.80469 11.2656C3.41406 10.8906 4.07031 10.5625 4.77344 10.2813C5.47656 10 6.17969 9.75391 6.88281 9.54297C7.60938 9.33203 8.26563 9.14453 8.85156 8.98047C9.50781 8.93359 10.1641 8.78125 10.8203 8.52344C11.5 8.24219 12.168 8.05469 12.8242 7.96094C13.1523 7.96094 13.4219 8.08984 13.6328 8.34766C13.8438 8.60547 13.9492 8.875 13.9492 9.15625C13.9492 9.55469 13.8672 9.85938 13.7031 10.0703C13.5625 10.2578 13.3633 10.4102 13.1055 10.5273C12.8711 10.6211 12.6016 10.7031 12.2969 10.7734C11.9922 10.8203 11.6875 10.8789 11.3828 10.9492C11.1953 10.9961 10.9375 11.0664 10.6094 11.1602C10.2813 11.2305 9.95313 11.3125 9.625 11.4063C9.29688 11.5 9.00391 11.582 8.74609 11.6523C8.48828 11.7227 8.33594 11.7695 8.28906 11.793C7.5625 12.0977 6.87109 12.3906 6.21484 12.6719C5.58203 12.9297 5.01953 13.1992 4.52734 13.4805C4.05859 13.7617 3.68359 14.0664 3.40234 14.3945C3.14453 14.6992 3.02734 15.0391 3.05078 15.4141V15.4492C3.28516 15.7773 3.8125 16.0234 4.63281 16.1875C5.45313 16.3516 6.41406 16.4922 7.51563 16.6094C8.64063 16.7266 9.8125 16.8438 11.0313 16.9609C12.2734 17.0781 13.4102 17.2539 14.4414 17.4883C15.4727 17.7227 16.3281 18.0391 17.0078 18.4375C17.6875 18.8359 18.0391 19.375 18.0625 20.0547C18.0625 20.3125 18.0039 20.6172 17.8867 20.9688C17.793 21.3203 17.6523 21.5898 17.4648 21.7773C16.8789 22.4336 16.1758 23.1133 15.3555 23.8164C14.5586 24.5195 13.6914 25.1758 12.7539 25.7852C11.8164 26.3711 10.8438 26.875 9.83594 27.2969C8.85156 27.6953 7.87891 27.9297 6.91797 28C6.58984 28 6.28516 27.8828 6.00391 27.6484C5.72266 27.3906 5.58203 27.0859 5.58203 26.7344ZM25.8503 24.6602C25.6863 25.0117 25.5222 25.3984 25.3581 25.8203C25.1941 26.2188 25.0066 26.582 24.7956 26.9102C24.5847 27.2383 24.3269 27.5195 24.0222 27.7539C23.7175 27.9648 23.3308 28.0703 22.862 28.0703C22.0417 28.0703 21.362 27.8711 20.823 27.4727C20.2839 27.0508 19.8386 26.5352 19.487 25.9258C19.1589 25.293 18.9245 24.6133 18.7839 23.8867C18.6433 23.1602 18.573 22.4805 18.573 21.8477L18.8542 13.3398C18.8308 13.1758 18.8659 13.0117 18.9597 12.8477C19.0769 12.6602 19.2175 12.4961 19.3816 12.3555C19.5691 12.1914 19.7683 12.0625 19.9792 11.9688C20.2136 11.875 20.4245 11.8281 20.612 11.8281C21.1511 11.8281 21.6081 12.0039 21.9831 12.3555C22.3581 12.6836 22.5456 13.1172 22.5456 13.6563V14.0078C22.2878 14.4297 22.0652 14.9805 21.8777 15.6602C21.6902 16.3398 21.5378 17.0781 21.4206 17.875C21.3269 18.6484 21.2683 19.4453 21.2448 20.2656C21.2214 21.0859 21.2448 21.8359 21.3152 22.5156C21.4089 23.1953 21.5495 23.7813 21.737 24.2734C21.9245 24.7422 22.1706 25.0234 22.4753 25.1172C22.5925 25.1172 22.7683 25.0586 23.0027 24.9414C23.2605 24.8242 23.53 24.6016 23.8113 24.2734C24.0925 23.9453 24.3855 23.4883 24.6902 22.9023C24.9948 22.293 25.2644 21.4961 25.4988 20.5117C25.7331 19.5273 25.9089 18.332 26.0261 16.9258C26.1433 15.5195 26.1784 13.832 26.1316 11.8633C26.2253 11.6055 26.3542 11.4648 26.5183 11.4414C26.7058 11.418 26.8933 11.4063 27.0808 11.4063C27.2917 11.4063 27.4675 11.418 27.6081 11.4414C27.7488 11.4414 27.9011 11.5234 28.0652 11.6875C28.1823 11.8047 28.3113 11.9805 28.4519 12.2148C28.5925 12.4492 28.6628 12.5781 28.6628 12.6016L29.2605 28.1758C29.2605 28.5273 29.1667 28.8203 28.9792 29.0547C28.7917 29.2891 28.5222 29.4063 28.1706 29.4063C28.0534 29.4063 27.9128 29.3945 27.7488 29.3711C27.5847 29.3477 27.4206 29.3008 27.2566 29.2305C27.0925 29.1602 26.9402 29.0664 26.7995 28.9492C26.6823 28.8555 26.612 28.7383 26.5886 28.5977L25.9909 25.082L25.8503 24.6602ZM30.4741 23.7813C30.31 23.0781 30.31 22.2461 30.4741 21.2852C30.6616 20.3242 30.9428 19.3633 31.3178 18.4023C31.7163 17.418 32.1967 16.4922 32.7592 15.625C33.3452 14.7578 33.9545 14.0664 34.5873 13.5508C35.2436 13.0352 35.8998 12.7539 36.5561 12.707C37.2358 12.6367 37.8803 12.9297 38.4897 13.5859C38.4897 13.6094 38.5014 13.668 38.5248 13.7617C38.5483 13.8555 38.5717 14.0547 38.5952 14.3594C38.6186 14.6406 38.6303 15.0508 38.6303 15.5898C38.6538 16.1055 38.6655 16.8203 38.6655 17.7344C38.6889 17.7813 38.7123 17.8633 38.7358 17.9805C38.7827 18.0742 38.8061 18.1445 38.8061 18.1914C38.7358 18.4492 38.5952 18.6953 38.3842 18.9297C38.1967 19.1406 37.9506 19.2461 37.6459 19.2461C37.2475 19.2461 36.9194 19.1875 36.6616 19.0703C36.4272 18.9297 36.2514 18.6133 36.1342 18.1211C36.1811 18.0508 36.1928 17.9102 36.1694 17.6992C36.1459 17.4648 36.0991 17.207 36.0288 16.9258C35.9819 16.6445 35.935 16.3633 35.8881 16.082C35.8413 15.8008 35.8178 15.5781 35.8178 15.4141C35.7944 15.4141 35.7592 15.4375 35.7123 15.4844C35.6889 15.5078 35.6655 15.5313 35.642 15.5547C35.2436 16.2578 34.8686 17.043 34.517 17.9102C34.1889 18.7539 33.9311 19.6211 33.7436 20.5117C33.5795 21.3789 33.5209 22.2461 33.5678 23.1133C33.6381 23.9805 33.8959 24.7656 34.3413 25.4688C34.6694 25.4688 34.9741 25.3398 35.2553 25.082C35.5366 24.8008 35.7709 24.543 35.9584 24.3086C36.3569 23.8398 36.7436 23.3594 37.1186 22.8672C37.517 22.375 37.8803 21.8594 38.2084 21.3203C38.3491 21.0859 38.4545 20.875 38.5248 20.6875C38.5952 20.5 38.6772 20.3477 38.7709 20.2305C38.8881 20.1133 39.0288 20.0195 39.1928 19.9492C39.3569 19.8789 39.603 19.8438 39.9311 19.8438C40.3061 19.8438 40.6577 19.9375 40.9858 20.125C41.3139 20.2891 41.478 20.5703 41.478 20.9688C41.478 21.5078 41.2319 22.1875 40.7397 23.0078C40.2709 23.8047 39.685 24.5781 38.9819 25.3281C38.3022 26.0781 37.5756 26.7227 36.8022 27.2617C36.0288 27.7773 35.3491 28.0352 34.7631 28.0352C34.2006 28.0352 33.6498 27.9297 33.1108 27.7188C32.5952 27.4844 32.1381 27.1797 31.7397 26.8047C31.3647 26.4297 31.06 25.9844 30.8256 25.4688C30.5913 24.9531 30.4741 24.3906 30.4741 23.7813ZM42.1994 23.7813C42.0353 23.0781 42.0353 22.2461 42.1994 21.2852C42.3869 20.3242 42.6681 19.3633 43.0431 18.4023C43.4416 17.418 43.922 16.4922 44.4845 15.625C45.0705 14.7578 45.6798 14.0664 46.3127 13.5508C46.9689 13.0352 47.6252 12.7539 48.2814 12.707C48.9611 12.6367 49.6056 12.9297 50.215 13.5859C50.215 13.6094 50.2267 13.668 50.2502 13.7617C50.2736 13.8555 50.297 14.0547 50.3205 14.3594C50.3439 14.6406 50.3556 15.0508 50.3556 15.5898C50.3791 16.1055 50.3908 16.8203 50.3908 17.7344C50.4142 17.7813 50.4377 17.8633 50.4611 17.9805C50.508 18.0742 50.5314 18.1445 50.5314 18.1914C50.4611 18.4492 50.3205 18.6953 50.1095 18.9297C49.922 19.1406 49.6759 19.2461 49.3713 19.2461C48.9728 19.2461 48.6447 19.1875 48.3869 19.0703C48.1525 18.9297 47.9767 18.6133 47.8595 18.1211C47.9064 18.0508 47.9181 17.9102 47.8947 17.6992C47.8713 17.4648 47.8244 17.207 47.7541 16.9258C47.7072 16.6445 47.6603 16.3633 47.6134 16.082C47.5666 15.8008 47.5431 15.5781 47.5431 15.4141C47.5197 15.4141 47.4845 15.4375 47.4377 15.4844C47.4142 15.5078 47.3908 15.5313 47.3673 15.5547C46.9689 16.2578 46.5939 17.043 46.2423 17.9102C45.9142 18.7539 45.6564 19.6211 45.4689 20.5117C45.3048 21.3789 45.2463 22.2461 45.2931 23.1133C45.3634 23.9805 45.6213 24.7656 46.0666 25.4688C46.3947 25.4688 46.6994 25.3398 46.9806 25.082C47.2619 24.8008 47.4963 24.543 47.6838 24.3086C48.0822 23.8398 48.4689 23.3594 48.8439 22.8672C49.2423 22.375 49.6056 21.8594 49.9338 21.3203C50.0744 21.0859 50.1798 20.875 50.2502 20.6875C50.3205 20.5 50.4025 20.3477 50.4963 20.2305C50.6134 20.1133 50.7541 20.0195 50.9181 19.9492C51.0822 19.8789 51.3283 19.8438 51.6564 19.8438C52.0314 19.8438 52.383 19.9375 52.7111 20.125C53.0392 20.2891 53.2033 20.5703 53.2033 20.9688C53.2033 21.5078 52.9572 22.1875 52.465 23.0078C51.9963 23.8047 51.4103 24.5781 50.7072 25.3281C50.0275 26.0781 49.3009 26.7227 48.5275 27.2617C47.7541 27.7773 47.0744 28.0352 46.4884 28.0352C45.9259 28.0352 45.3752 27.9297 44.8361 27.7188C44.3205 27.4844 43.8634 27.1797 43.465 26.8047C43.09 26.4297 42.7853 25.9844 42.5509 25.4688C42.3166 24.9531 42.1994 24.3906 42.1994 23.7813ZM68.62 18.0156C68.5731 18.4375 68.5145 18.7656 68.4442 19C68.3974 19.2344 68.3036 19.4453 68.163 19.6328C68.0224 19.8203 67.8231 20.0195 67.5653 20.2305C67.3075 20.418 66.9559 20.6992 66.5106 21.0742C66.0653 21.4258 65.5145 21.8945 64.8583 22.4805C64.202 23.0664 63.4052 23.8281 62.4677 24.7656C62.0927 25.1172 61.7059 25.4805 61.3075 25.8555C60.9091 26.2305 60.4872 26.5703 60.0419 26.875C59.62 27.1563 59.1747 27.3906 58.7059 27.5781C58.2372 27.7656 57.745 27.8594 57.2294 27.8594C56.2216 27.8594 55.4833 27.5195 55.0145 26.8398C54.5458 26.1602 54.3114 25.375 54.3114 24.4844C54.3114 23.8984 54.3231 23.4063 54.3466 23.0078C54.3934 22.6094 54.4872 22.0938 54.6278 21.4609C54.37 21.2266 54.1473 21.0273 53.9598 20.8633C53.7723 20.6758 53.6786 20.4297 53.6786 20.125C53.6786 19.8438 53.7372 19.6563 53.8544 19.5625C53.995 19.4688 54.1473 19.4102 54.3114 19.3867C54.4989 19.3398 54.6747 19.293 54.8388 19.2461C55.0028 19.1992 55.12 19.1055 55.1903 18.9648C55.2372 18.8242 55.3192 18.5664 55.4364 18.1914C55.577 17.8164 55.7177 17.4297 55.8583 17.0313C55.9989 16.6094 56.1278 16.2227 56.245 15.8711C56.3856 15.4961 56.4794 15.2383 56.5263 15.0977C56.6903 14.6992 56.8661 14.3008 57.0536 13.9023C57.2645 13.4805 57.4989 13.1055 57.7567 12.7773C58.038 12.4492 58.3544 12.1797 58.7059 11.9688C59.0809 11.7578 59.5145 11.6523 60.0067 11.6523C60.288 11.6523 60.6278 11.7813 61.0263 12.0391C61.4481 12.2969 61.8466 12.6133 62.2216 12.9883C62.5966 13.3398 62.913 13.7148 63.1708 14.1133C63.4286 14.5117 63.5575 14.8516 63.5575 15.1328C63.5575 15.4844 63.4755 15.8125 63.3114 16.1172C63.1474 16.3984 62.9364 16.668 62.6786 16.9258C62.4442 17.1602 62.1864 17.3828 61.9052 17.5938C61.6239 17.8047 61.3661 18.0039 61.1317 18.1914C61.1083 18.1914 61.0614 18.2148 60.9911 18.2617C60.9208 18.3086 60.8622 18.3438 60.8153 18.3672C60.7919 18.3906 60.7333 18.4492 60.6395 18.543C60.5692 18.6133 60.4872 18.6953 60.3934 18.7891C60.2997 18.8828 60.2059 18.9766 60.1122 19.0703C60.0419 19.1641 59.995 19.2227 59.9716 19.2461C59.9013 19.3164 59.7606 19.4336 59.5497 19.5977C59.3622 19.7383 59.1513 19.9023 58.9169 20.0898C58.6825 20.2539 58.4598 20.418 58.2489 20.582C58.0614 20.7227 57.9325 20.8164 57.8622 20.8633L57.7216 21.1445C57.6747 21.2383 57.6278 21.4492 57.5809 21.7773C57.5575 22.082 57.5223 22.4336 57.4755 22.832C57.4286 23.2305 57.3817 23.6406 57.3348 24.0625C57.3114 24.4609 57.2997 24.7891 57.2997 25.0469C57.2997 25.0703 57.3114 25.0938 57.3348 25.1172C57.3817 25.1641 57.4169 25.1875 57.4403 25.1875C57.6278 25.1875 57.8036 25.1055 57.9677 24.9414C58.1317 24.7773 58.3075 24.6602 58.495 24.5898L64.12 19.3867L65.5614 17.1719C65.6786 17.0078 65.9013 16.832 66.2294 16.6445C66.5809 16.4336 66.9325 16.3281 67.2841 16.3281C67.6356 16.3047 67.9403 16.4102 68.1981 16.6445C68.4794 16.8789 68.62 17.3359 68.62 18.0156ZM60.8856 15.2734C61.0028 15.1797 61.0497 15.0391 61.0263 14.8516C61.0028 14.6641 60.9325 14.5 60.8153 14.3594C60.7216 14.2188 60.5927 14.1367 60.4286 14.1133C60.2645 14.0664 60.1122 14.1484 59.9716 14.3594C59.9013 14.4531 59.7723 14.6406 59.5848 14.9219C59.4208 15.2031 59.245 15.4961 59.0575 15.8008C58.8934 16.082 58.7528 16.3281 58.6356 16.5391C58.5184 16.75 58.495 16.832 58.5653 16.7852L60.8856 15.2734ZM74.1578 26.6641C74.1578 26.5469 74.1578 26.4414 74.1578 26.3477C74.1813 26.2539 74.2399 26.1602 74.3336 26.0664C74.6149 25.7148 74.9313 25.3516 75.2828 24.9766C75.6344 24.5781 75.9742 24.1914 76.3024 23.8164C76.6305 23.418 76.9352 23.0078 77.2164 22.5859C77.4977 22.1641 77.732 21.7422 77.9195 21.3203V21.1094L73.3141 22.0586H72.7867C72.4586 22.0586 72.0484 22.0352 71.5563 21.9883C71.0875 21.9414 70.6188 21.8477 70.15 21.707C69.7047 21.543 69.318 21.3203 68.9899 21.0391C68.6852 20.7578 68.5328 20.3828 68.5328 19.9141C68.5563 19.375 68.8375 18.7773 69.3766 18.1211C69.9156 17.4648 70.5484 16.8203 71.275 16.1875C72.0016 15.5547 72.7281 14.9688 73.4547 14.4297C74.2047 13.8906 74.8024 13.4688 75.2477 13.1641C75.7399 12.8828 76.3258 12.6602 77.0055 12.4961C77.6852 12.3086 78.3063 12.2148 78.8688 12.2148C79.3375 12.2148 79.7477 12.3086 80.0992 12.4961C80.4508 12.6602 80.6266 13 80.6266 13.5156C80.6266 13.7266 80.6031 13.9258 80.5563 14.1133C80.5328 14.3008 80.3922 14.4297 80.1344 14.5C79.3844 14.4297 78.6813 14.4883 78.025 14.6758C77.3688 14.8398 76.7477 15.0977 76.1617 15.4492C75.5758 15.8008 75.025 16.2227 74.5094 16.7148C73.9938 17.1836 73.4899 17.6758 72.9977 18.1914C72.857 18.3555 72.6813 18.5898 72.4703 18.8945C72.2594 19.1758 72.1539 19.3398 72.1539 19.3867V19.4219C72.7633 19.4219 73.3609 19.3633 73.9469 19.2461C74.5563 19.1289 75.1539 19.0117 75.7399 18.8945C76.3492 18.7539 76.9469 18.625 77.5328 18.5078C78.1422 18.3906 78.7633 18.332 79.3961 18.332C79.6305 18.332 79.8883 18.3555 80.1695 18.4023C80.4508 18.4258 80.7086 18.4961 80.943 18.6133C81.2008 18.7305 81.4 18.8945 81.5406 19.1055C81.7047 19.293 81.7867 19.5391 81.7867 19.8438C81.7867 20.2891 81.6695 20.7227 81.4352 21.1445C81.2242 21.543 80.8961 22.0352 80.4508 22.6211C80.0289 23.1836 79.4781 23.875 78.7984 24.6953C78.1422 25.5156 77.357 26.5703 76.443 27.8594C76.3961 27.9297 76.2789 27.9766 76.0914 28C75.9274 28.0234 75.7867 28.0352 75.6695 28.0352C75.3414 28.0352 75.0016 27.8945 74.65 27.6133C74.3219 27.332 74.1578 27.0156 74.1578 26.6641ZM87.9222 26.6641C87.9222 26.5469 87.9222 26.4414 87.9222 26.3477C87.9456 26.2539 88.0042 26.1602 88.098 26.0664C88.3792 25.7148 88.6956 25.3516 89.0472 24.9766C89.3988 24.5781 89.7386 24.1914 90.0667 23.8164C90.3949 23.418 90.6995 23.0078 90.9808 22.5859C91.262 22.1641 91.4964 21.7422 91.6839 21.3203V21.1094L87.0784 22.0586H86.5511C86.223 22.0586 85.8128 22.0352 85.3206 21.9883C84.8519 21.9414 84.3831 21.8477 83.9144 21.707C83.4691 21.543 83.0824 21.3203 82.7542 21.0391C82.4495 20.7578 82.2972 20.3828 82.2972 19.9141C82.3206 19.375 82.6019 18.7773 83.1409 18.1211C83.68 17.4648 84.3128 16.8203 85.0394 16.1875C85.7659 15.5547 86.4925 14.9688 87.2191 14.4297C87.9691 13.8906 88.5667 13.4688 89.012 13.1641C89.5042 12.8828 90.0902 12.6602 90.7699 12.4961C91.4495 12.3086 92.0706 12.2148 92.6331 12.2148C93.1019 12.2148 93.512 12.3086 93.8636 12.4961C94.2152 12.6602 94.3909 13 94.3909 13.5156C94.3909 13.7266 94.3675 13.9258 94.3206 14.1133C94.2972 14.3008 94.1566 14.4297 93.8988 14.5C93.1488 14.4297 92.4456 14.4883 91.7894 14.6758C91.1331 14.8398 90.512 15.0977 89.9261 15.4492C89.3402 15.8008 88.7894 16.2227 88.2738 16.7148C87.7581 17.1836 87.2542 17.6758 86.762 18.1914C86.6214 18.3555 86.4456 18.5898 86.2347 18.8945C86.0238 19.1758 85.9183 19.3398 85.9183 19.3867V19.4219C86.5277 19.4219 87.1253 19.3633 87.7113 19.2461C88.3206 19.1289 88.9183 19.0117 89.5042 18.8945C90.1136 18.7539 90.7113 18.625 91.2972 18.5078C91.9066 18.3906 92.5277 18.332 93.1605 18.332C93.3949 18.332 93.6527 18.3555 93.9339 18.4023C94.2152 18.4258 94.473 18.4961 94.7074 18.6133C94.9652 18.7305 95.1644 18.8945 95.305 19.1055C95.4691 19.293 95.5511 19.5391 95.5511 19.8438C95.5511 20.2891 95.4339 20.7227 95.1995 21.1445C94.9886 21.543 94.6605 22.0352 94.2152 22.6211C93.7933 23.1836 93.2425 23.875 92.5628 24.6953C91.9066 25.5156 91.1214 26.5703 90.2074 27.8594C90.1605 27.9297 90.0433 27.9766 89.8558 28C89.6917 28.0234 89.5511 28.0352 89.4339 28.0352C89.1058 28.0352 88.7659 27.8945 88.4144 27.6133C88.0863 27.332 87.9222 27.0156 87.9222 26.6641ZM115.381 26.6641C115.381 26.5469 115.381 26.4414 115.381 26.3477C115.404 26.2539 115.463 26.1602 115.556 26.0664C115.838 25.7148 116.154 25.3516 116.506 24.9766C116.857 24.5781 117.197 24.1914 117.525 23.8164C117.853 23.418 118.158 23.0078 118.439 22.5859C118.72 22.1641 118.955 21.7422 119.142 21.3203V21.1094L114.537 22.0586H114.01C113.681 22.0586 113.271 22.0352 112.779 21.9883C112.31 21.9414 111.842 21.8477 111.373 21.707C110.928 21.543 110.541 21.3203 110.213 21.0391C109.908 20.7578 109.756 20.3828 109.756 19.9141C109.779 19.375 110.06 18.7773 110.599 18.1211C111.138 17.4648 111.771 16.8203 112.498 16.1875C113.224 15.5547 113.951 14.9688 114.678 14.4297C115.428 13.8906 116.025 13.4688 116.47 13.1641C116.963 12.8828 117.549 12.6602 118.228 12.4961C118.908 12.3086 119.529 12.2148 120.092 12.2148C120.56 12.2148 120.97 12.3086 121.322 12.4961C121.674 12.6602 121.849 13 121.849 13.5156C121.849 13.7266 121.826 13.9258 121.779 14.1133C121.756 14.3008 121.615 14.4297 121.357 14.5C120.607 14.4297 119.904 14.4883 119.248 14.6758C118.592 14.8398 117.97 15.0977 117.385 15.4492C116.799 15.8008 116.248 16.2227 115.732 16.7148C115.217 17.1836 114.713 17.6758 114.22 18.1914C114.08 18.3555 113.904 18.5898 113.693 18.8945C113.482 19.1758 113.377 19.3398 113.377 19.3867V19.4219C113.986 19.4219 114.584 19.3633 115.17 19.2461C115.779 19.1289 116.377 19.0117 116.963 18.8945C117.572 18.7539 118.17 18.625 118.756 18.5078C119.365 18.3906 119.986 18.332 120.619 18.332C120.853 18.332 121.111 18.3555 121.392 18.4023C121.674 18.4258 121.931 18.4961 122.166 18.6133C122.424 18.7305 122.623 18.8945 122.763 19.1055C122.928 19.293 123.01 19.5391 123.01 19.8438C123.01 20.2891 122.892 20.7227 122.658 21.1445C122.447 21.543 122.119 22.0352 121.674 22.6211C121.252 23.1836 120.701 23.875 120.021 24.6953C119.365 25.5156 118.58 26.5703 117.666 27.8594C117.619 27.9297 117.502 27.9766 117.314 28C117.15 28.0234 117.01 28.0352 116.892 28.0352C116.564 28.0352 116.224 27.8945 115.873 27.6133C115.545 27.332 115.381 27.0156 115.381 26.6641ZM127.211 17.7344C126.883 17.7344 126.59 17.8164 126.333 17.9805C126.075 18.1445 125.77 18.2266 125.418 18.2266C125.372 18.2266 125.243 18.2266 125.032 18.2266C124.844 18.2031 124.727 18.1914 124.68 18.1914C124.586 18.0742 124.481 17.9805 124.364 17.9102C124.247 17.8398 124.129 17.7695 124.012 17.6992C123.895 17.6055 123.79 17.5 123.696 17.3828C123.625 17.2656 123.59 17.1016 123.59 16.8906C123.59 16.5391 123.731 16.2578 124.012 16.0469C124.293 15.8125 124.622 15.6133 124.997 15.4492C125.372 15.2852 125.747 15.1328 126.122 14.9922C126.52 14.8516 126.836 14.6875 127.071 14.5V12.9531C127.071 11.2188 126.989 9.48438 126.825 7.75C126.661 5.99219 126.579 4.25781 126.579 2.54688C126.579 2.07813 126.696 1.77344 126.93 1.63281C127.165 1.49219 127.481 1.42188 127.879 1.42188C128.348 1.42188 128.688 1.5625 128.899 1.84375C129.133 2.10156 129.297 2.42969 129.391 2.82813C129.485 3.20313 129.532 3.61328 129.532 4.05859C129.532 4.48047 129.543 4.84375 129.567 5.14844C129.567 5.45313 129.59 5.99219 129.637 6.76563C129.684 7.53906 129.731 8.35938 129.778 9.22656C129.825 10.0938 129.872 10.9141 129.918 11.6875C129.965 12.4609 130 13 130.024 13.3047C130.118 13.2813 130.293 13.2227 130.551 13.1289C130.833 13.0117 131.125 12.9063 131.43 12.8125C131.735 12.6953 132.016 12.5898 132.274 12.4961C132.555 12.4023 132.754 12.332 132.872 12.2852C133.481 12.0273 134.114 11.7461 134.77 11.4414C135.426 11.1133 136.094 10.9492 136.774 10.9492C137.243 10.9492 137.594 11.1133 137.829 11.4414C138.086 11.7461 138.215 12.1094 138.215 12.5313C138.215 12.8359 138.098 13.0586 137.864 13.1992C137.629 13.3398 137.383 13.4688 137.125 13.5859L130.727 15.9766C130.657 16.0234 130.586 16.0703 130.516 16.1172C130.446 16.1406 130.375 16.1875 130.305 16.2578V17.3828C130.305 18.2031 130.317 19.0586 130.34 19.9492C130.387 20.8164 130.469 21.6602 130.586 22.4805C130.704 23.1836 130.833 23.875 130.973 24.5547C131.114 25.2344 131.184 25.9258 131.184 26.6289C131.184 26.8398 131.114 27.1211 130.973 27.4727C130.833 27.8242 130.61 28 130.305 28C129.672 28 129.157 27.8125 128.758 27.4375C128.36 27.0625 128.137 26.5586 128.09 25.9258C127.973 24.707 127.844 23.3711 127.704 21.918C127.586 20.4648 127.469 19.0703 127.352 17.7344H127.211ZM138.726 22.6211L140.027 13.5859C140.073 13.2813 140.202 13.0586 140.413 12.918C140.648 12.7773 140.905 12.707 141.187 12.707C141.702 12.707 142.113 12.8594 142.417 13.1641C142.722 13.4453 142.98 13.7969 143.191 14.2188H143.226C143.507 14.2188 143.753 14.1719 143.964 14.0781C144.198 13.9609 144.48 13.9023 144.808 13.9023C145.558 13.9023 146.191 14.1367 146.706 14.6055C147.245 15.0742 147.679 15.6484 148.007 16.3281C148.335 16.9844 148.57 17.6992 148.71 18.4727C148.874 19.2461 148.956 19.9258 148.956 20.5117C148.956 21.2148 148.769 22 148.394 22.8672C148.042 23.7344 147.562 24.5547 146.952 25.3281C146.366 26.1016 145.698 26.7461 144.948 27.2617C144.198 27.7773 143.437 28.0352 142.663 28.0352C141.96 28.0352 141.351 27.8711 140.835 27.543C140.343 27.2148 139.933 26.8047 139.605 26.3125C139.3 25.7969 139.077 25.2227 138.937 24.5898C138.796 23.957 138.726 23.3359 138.726 22.7266V22.6211ZM141.679 22.832C141.726 23.0664 141.773 23.3359 141.82 23.6406C141.866 23.9453 141.937 24.2266 142.03 24.4844C142.124 24.7188 142.253 24.9063 142.417 25.0469C142.605 25.1641 142.863 25.1641 143.191 25.0469C143.495 24.7656 143.823 24.4492 144.175 24.0977C144.527 23.7461 144.855 23.3711 145.159 22.9727C145.488 22.5742 145.757 22.1523 145.968 21.707C146.179 21.2617 146.284 20.793 146.284 20.3008C146.378 19.5039 146.32 18.7773 146.109 18.1211C145.898 17.4414 145.593 16.9609 145.195 16.6797C144.82 16.375 144.386 16.3398 143.894 16.5742C143.402 16.7852 142.909 17.3828 142.417 18.3672C142.136 18.9766 141.937 19.6914 141.82 20.5117C141.726 21.3086 141.679 22.0469 141.679 22.7266V22.832ZM151.365 26.4883C151.318 25.6445 151.236 24.5195 151.119 23.1133C151.025 21.6836 150.908 20.207 150.768 18.6836C150.65 17.1602 150.521 15.7188 150.381 14.3594C150.24 13 150.123 11.9453 150.029 11.1953C150.029 10.8906 150.17 10.6914 150.451 10.5977C150.732 10.5039 151.002 10.457 151.26 10.457C151.588 10.457 151.928 10.5508 152.279 10.7383C152.654 10.9258 152.889 11.1836 152.982 11.5117C152.982 11.6055 152.994 11.7813 153.018 12.0391C153.041 12.2734 153.053 12.5195 153.053 12.7773C153.076 13.0352 153.1 13.293 153.123 13.5508C153.146 13.7852 153.158 13.9492 153.158 14.043C153.158 14.1836 153.158 14.2891 153.158 14.3594C153.158 14.4297 153.158 14.5 153.158 14.5703C153.158 14.6172 153.17 14.6758 153.193 14.7461C153.217 14.8164 153.252 14.9336 153.299 15.0977C153.346 15.0508 153.393 14.9922 153.439 14.9219C153.51 14.8516 153.557 14.8047 153.58 14.7813C153.955 14.2422 154.318 13.7734 154.67 13.375C155.021 12.9531 155.385 12.5664 155.76 12.2148C156.135 11.8398 156.545 11.4531 156.99 11.0547C157.459 10.6328 157.998 10.1523 158.607 9.61328C158.748 9.49609 158.853 9.41406 158.924 9.36719C158.994 9.29688 159.053 9.25 159.1 9.22656C159.17 9.17969 159.24 9.15625 159.31 9.15625C159.381 9.13281 159.475 9.12109 159.592 9.12109C159.99 9.12109 160.389 9.26172 160.787 9.54297C161.209 9.80078 161.42 10.1641 161.42 10.6328C161.42 10.7969 161.361 10.9727 161.244 11.1602C161.127 11.3242 160.986 11.4883 160.822 11.6523C160.658 11.793 160.482 11.9219 160.295 12.0391C160.131 12.1563 159.978 12.2383 159.838 12.2852C159.228 12.8242 158.584 13.4453 157.904 14.1484C157.225 14.8281 156.592 15.5664 156.006 16.3633C155.42 17.1602 154.939 17.9922 154.564 18.8594C154.189 19.7266 154.002 20.5938 154.002 21.4609C154.002 22.2578 154.06 23.043 154.178 23.8164C154.295 24.5898 154.353 25.375 154.353 26.1719V27.4023C154.166 27.5898 154.002 27.7422 153.861 27.8594C153.721 27.9766 153.521 28.0352 153.264 28.0352C152.865 28.0352 152.478 27.8711 152.103 27.543C151.728 27.1914 151.482 26.8398 151.365 26.4883ZM163.266 26.6641C163.032 24.3203 162.833 22.3164 162.669 20.6523C162.505 18.9883 162.364 17.5938 162.247 16.4688C162.13 15.3438 162.024 14.4531 161.93 13.7969C161.86 13.1172 161.801 12.6133 161.755 12.2852C161.708 11.9336 161.673 11.6992 161.649 11.582C161.626 11.4648 161.614 11.3945 161.614 11.3711V11.2305C161.614 10.9727 161.719 10.7617 161.93 10.5977C162.165 10.4102 162.399 10.3164 162.633 10.3164C162.985 10.3164 163.36 10.375 163.758 10.4922C164.18 10.6094 164.462 10.8555 164.602 11.2305C164.813 12.3789 164.954 13.5391 165.024 14.7109C165.118 15.8828 165.188 17.0547 165.235 18.2266C165.305 19.375 165.387 20.5352 165.481 21.707C165.598 22.8789 165.798 24.0391 166.079 25.1875C166.079 25.2344 166.09 25.3281 166.114 25.4688C166.161 25.6094 166.196 25.7617 166.219 25.9258C166.266 26.0898 166.301 26.2422 166.325 26.3828C166.348 26.5234 166.36 26.6172 166.36 26.6641V26.7344C166.36 26.7578 166.372 26.7813 166.395 26.8047C166.395 27.0859 166.266 27.3672 166.008 27.6484C165.751 27.9297 165.481 28.0469 165.2 28C165.13 27.9766 164.954 27.9414 164.673 27.8945C164.415 27.8242 164.239 27.7656 164.145 27.7188C164.075 27.6953 163.981 27.6484 163.864 27.5781C163.747 27.4844 163.63 27.3906 163.512 27.2969C163.419 27.2031 163.337 27.0977 163.266 26.9805C163.196 26.8633 163.196 26.7578 163.266 26.6641ZM161.298 1.03516C161.298 0.871094 161.426 0.730469 161.684 0.613281C161.965 0.472656 162.176 0.402344 162.317 0.402344C162.669 0.402344 163.055 0.507813 163.477 0.71875C163.923 0.90625 164.145 1.19922 164.145 1.59766C164.145 1.99609 164.087 2.26563 163.969 2.40625C163.876 2.54688 163.63 2.61719 163.231 2.61719C162.809 2.61719 162.376 2.47656 161.93 2.19531C161.508 1.91406 161.298 1.52734 161.298 1.03516ZM181.671 18.0156C181.624 18.4375 181.566 18.7656 181.495 19C181.449 19.2344 181.355 19.4453 181.214 19.6328C181.074 19.8203 180.874 20.0195 180.617 20.2305C180.359 20.418 180.007 20.6992 179.562 21.0742C179.117 21.4258 178.566 21.8945 177.91 22.4805C177.253 23.0664 176.456 23.8281 175.519 24.7656C175.144 25.1172 174.757 25.4805 174.359 25.8555C173.96 26.2305 173.538 26.5703 173.093 26.875C172.671 27.1563 172.226 27.3906 171.757 27.5781C171.288 27.7656 170.796 27.8594 170.281 27.8594C169.273 27.8594 168.535 27.5195 168.066 26.8398C167.597 26.1602 167.363 25.375 167.363 24.4844C167.363 23.8984 167.374 23.4063 167.398 23.0078C167.445 22.6094 167.538 22.0938 167.679 21.4609C167.421 21.2266 167.199 21.0273 167.011 20.8633C166.824 20.6758 166.73 20.4297 166.73 20.125C166.73 19.8438 166.788 19.6563 166.906 19.5625C167.046 19.4688 167.199 19.4102 167.363 19.3867C167.55 19.3398 167.726 19.293 167.89 19.2461C168.054 19.1992 168.171 19.1055 168.242 18.9648C168.288 18.8242 168.37 18.5664 168.488 18.1914C168.628 17.8164 168.769 17.4297 168.91 17.0313C169.05 16.6094 169.179 16.2227 169.296 15.8711C169.437 15.4961 169.531 15.2383 169.578 15.0977C169.742 14.6992 169.917 14.3008 170.105 13.9023C170.316 13.4805 170.55 13.1055 170.808 12.7773C171.089 12.4492 171.406 12.1797 171.757 11.9688C172.132 11.7578 172.566 11.6523 173.058 11.6523C173.339 11.6523 173.679 11.7813 174.078 12.0391C174.499 12.2969 174.898 12.6133 175.273 12.9883C175.648 13.3398 175.964 13.7148 176.222 14.1133C176.48 14.5117 176.609 14.8516 176.609 15.1328C176.609 15.4844 176.527 15.8125 176.363 16.1172C176.199 16.3984 175.988 16.668 175.73 16.9258C175.495 17.1602 175.238 17.3828 174.956 17.5938C174.675 17.8047 174.417 18.0039 174.183 18.1914C174.16 18.1914 174.113 18.2148 174.042 18.2617C173.972 18.3086 173.913 18.3438 173.867 18.3672C173.843 18.3906 173.785 18.4492 173.691 18.543C173.62 18.6133 173.538 18.6953 173.445 18.7891C173.351 18.8828 173.257 18.9766 173.163 19.0703C173.093 19.1641 173.046 19.2227 173.023 19.2461C172.953 19.3164 172.812 19.4336 172.601 19.5977C172.413 19.7383 172.203 19.9023 171.968 20.0898C171.734 20.2539 171.511 20.418 171.3 20.582C171.113 20.7227 170.984 20.8164 170.913 20.8633L170.773 21.1445C170.726 21.2383 170.679 21.4492 170.632 21.7773C170.609 22.082 170.574 22.4336 170.527 22.832C170.48 23.2305 170.433 23.6406 170.386 24.0625C170.363 24.4609 170.351 24.7891 170.351 25.0469C170.351 25.0703 170.363 25.0938 170.386 25.1172C170.433 25.1641 170.468 25.1875 170.492 25.1875C170.679 25.1875 170.855 25.1055 171.019 24.9414C171.183 24.7773 171.359 24.6602 171.546 24.5898L177.171 19.3867L178.613 17.1719C178.73 17.0078 178.953 16.832 179.281 16.6445C179.632 16.4336 179.984 16.3281 180.335 16.3281C180.687 16.3047 180.992 16.4102 181.249 16.6445C181.531 16.8789 181.671 17.3359 181.671 18.0156ZM173.937 15.2734C174.054 15.1797 174.101 15.0391 174.078 14.8516C174.054 14.6641 173.984 14.5 173.867 14.3594C173.773 14.2188 173.644 14.1367 173.48 14.1133C173.316 14.0664 173.163 14.1484 173.023 14.3594C172.953 14.4531 172.824 14.6406 172.636 14.9219C172.472 15.2031 172.296 15.4961 172.109 15.8008C171.945 16.082 171.804 16.3281 171.687 16.5391C171.57 16.75 171.546 16.832 171.617 16.7852L173.937 15.2734ZM187.209 26.6641C187.209 26.5469 187.209 26.4414 187.209 26.3477C187.233 26.2539 187.291 26.1602 187.385 26.0664C187.666 25.7148 187.983 25.3516 188.334 24.9766C188.686 24.5781 189.025 24.1914 189.354 23.8164C189.682 23.418 189.986 23.0078 190.268 22.5859C190.549 22.1641 190.783 21.7422 190.971 21.3203V21.1094L186.365 22.0586H185.838C185.51 22.0586 185.1 22.0352 184.608 21.9883C184.139 21.9414 183.67 21.8477 183.201 21.707C182.756 21.543 182.369 21.3203 182.041 21.0391C181.736 20.7578 181.584 20.3828 181.584 19.9141C181.608 19.375 181.889 18.7773 182.428 18.1211C182.967 17.4648 183.6 16.8203 184.326 16.1875C185.053 15.5547 185.779 14.9688 186.506 14.4297C187.256 13.8906 187.854 13.4688 188.299 13.1641C188.791 12.8828 189.377 12.6602 190.057 12.4961C190.736 12.3086 191.358 12.2148 191.92 12.2148C192.389 12.2148 192.799 12.3086 193.15 12.4961C193.502 12.6602 193.678 13 193.678 13.5156C193.678 13.7266 193.654 13.9258 193.608 14.1133C193.584 14.3008 193.443 14.4297 193.186 14.5C192.436 14.4297 191.733 14.4883 191.076 14.6758C190.42 14.8398 189.799 15.0977 189.213 15.4492C188.627 15.8008 188.076 16.2227 187.561 16.7148C187.045 17.1836 186.541 17.6758 186.049 18.1914C185.908 18.3555 185.733 18.5898 185.522 18.8945C185.311 19.1758 185.205 19.3398 185.205 19.3867V19.4219C185.815 19.4219 186.412 19.3633 186.998 19.2461C187.608 19.1289 188.205 19.0117 188.791 18.8945C189.4 18.7539 189.998 18.625 190.584 18.5078C191.193 18.3906 191.815 18.332 192.447 18.332C192.682 18.332 192.94 18.3555 193.221 18.4023C193.502 18.4258 193.76 18.4961 193.994 18.6133C194.252 18.7305 194.451 18.8945 194.592 19.1055C194.756 19.293 194.838 19.5391 194.838 19.8438C194.838 20.2891 194.721 20.7227 194.486 21.1445C194.275 21.543 193.947 22.0352 193.502 22.6211C193.08 23.1836 192.529 23.875 191.85 24.6953C191.193 25.5156 190.408 26.5703 189.494 27.8594C189.447 27.9297 189.33 27.9766 189.143 28C188.979 28.0234 188.838 28.0352 188.721 28.0352C188.393 28.0352 188.053 27.8945 187.701 27.6133C187.373 27.332 187.209 27.0156 187.209 26.6641Z"
                fill="#2DA950"
              />
            </svg>
          </h1>
          <p className=" text-4xl text-center text-black font-semibold leading-snug ">
            Every success journey we’ve encountered.
          </p>
        </div>

        <div className="flex justify-between mt-14">
          <div className="flex relative">
            <img
              src="/hero.png"
              alt="hero-img"
              className=" w-[400px] h-[500px] rounded-3xl"
            />

            <div className="bg-white hover:bg-green-200  cursor-pointer w-[180px] mt-20 z-10 absolute top-10 left-[-20%] flex flex-col  items-center p-3 rounded-xl shadow-xl gap-5">
              <h1 className="absolute top-0 left-3">
                <img src="/hero-crown.svg" alt="crown" className="w-24" />
                <span className="text-4xl font-semibold absolute top-14 left-9">
                  40%
                </span>
              </h1>

              <p className="text-sm text-gray-500 mt-28  ">
                Achieved reduction in project execution time by optimising team
                availability
              </p>
            </div>
            <div className="bg-white hover:bg-green-200  cursor-pointer z-10 absolute top-[80%] left-[-8%] p-2 w-[180px] rounded-full shadow-xl flex gap-3 ">
              <button className=" rounded-[100%] bg-green-100 p-3  ">
                <img src="/rocket.svg" alt="rocket" className="w-3" />
              </button>
              <div className="flex flex-col">
                <h1 className="text-lg font-semibold">10 Days</h1>
                <p className="text-xs text-gray-500">Staff Deployment</p>
              </div>
            </div>
            <div className="bg-green-950 cursor-pointer hover:bg-green-800 w-[200px] mt-20 z-10 absolute top-72 right-[-12%]   flex flex-col  items-center p-3 rounded-xl shadow-xl gap-3">
              <h1 className="text-3xl p-1 font-semibold text-white flex gap-1 items-end">
                $0.5<span className="text-lg text-gray-400">million</span>
              </h1>
              <p className="text-gray-400">
                Reduced client expenses by saving on hiring and employee costs.
              </p>
            </div>
          </div>

          <div className="w-[300px] p-4 mt-10 mx-7">
            <h1 className="text-3xl font-medium">
              Enhance fortune 50 company’s insights teams research capabilities
            </h1>
            <div className="mt-5 ml-0 ">
              <svg
                width="57"
                height="7"
                viewBox="0 0 57 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-0"
              >
                <circle cx="5.375" cy="5.375" r="5.375" fill="#2DA950" />
                <circle cx="28.125" cy="5.375" r="5.375" fill="#E4E3E3" />
                <circle cx="50.875" cy="5.375" r="5.375" fill="#E4E3E3" />
              </svg>
            </div>
            <button className="bg-black text-white rounded-full p-5 w-48 flex gap-1 items-center justify-center mt-20">
              Explore More
              <span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.1716 10.9999L4 10.9999L4 12.9999L16.1716 12.9999L10.8076 18.3638L12.2218 19.778L20 11.9999L12.2218 4.22168L10.8076 5.63589L16.1716 10.9999Z"
                    fill="white"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
