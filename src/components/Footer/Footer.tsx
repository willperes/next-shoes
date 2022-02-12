import Image from 'next/image';

import { CustomFooter } from './styles';

export function Footer() {
  return (
    <CustomFooter>
      <div className="footer-wrapper">
        <ul>
          <li><h5>About us</h5></li>
          <li><p>Corporate information</p></li>
          <li><p>Carreers</p></li>
          <li><p>Press communique</p></li>
          <li><p>Community</p></li>
          <li><p>Accessibility</p></li>
        </ul>
        <ul>
          <li><h5>Let us help you</h5></li>
          <li><p>Your account</p></li>
          <li><p>Delivery and deadlines</p></li>
          <li><p>Returns and refunds</p></li>
          <li><p>Get help</p></li>
        </ul>
        <ul>
          <li><h5>Contact us</h5></li>
          <li><p>From 08 to 18h, monday to friday</p></li>
          <li><p>Phone: (00) 3333-3333</p></li>
          <li><p>WhatsApp: (00) 99999-9999</p></li>
          <li><p>E-mail: yourstore@loremipsum.com</p></li>
          <li></li>
        </ul>
      </div>
      <section className="footer-payment-methods">
        <Image src="/images/mastercard-icon.svg" height="50%" width="50rem" />
        <Image src="/images/visa-icon.svg" height="50%" width="50rem" />
        <Image src="/images/googlepay-icon.svg" height="50%" width="50rem" />
        <Image src="/images/applepay-icon.svg" height="50%" width="50rem" />
        <Image src="/images/paypal-icon.svg" height="50%" width="50rem" />
        <Image src="/images/amazon-icon.svg" height="50%" width="50rem" />
        <Image src="/images/alipay-icon.svg" height="50%" width="50rem" />
      </section>
    </CustomFooter>
  )
}