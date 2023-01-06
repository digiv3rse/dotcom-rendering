import type { FormField as FormFieldType } from '@guardian/apps-rendering-api-models/formField';
import type { ArticleFormat } from '@guardian/libs';
import {
	LinkButton,
	SvgGps,
	SvgWhatsApp,
} from '@guardian/source-react-components';
import type { FC } from 'react';
import { calloutPrimaryButton, info } from './styles';

interface CalloutContactProps {
	format: ArticleFormat;
	id: number;
	fields: FormFieldType[];
}

const WHATSAPP_GUIDANCE_URL =
	'https://www.theguardian.com/info/2015/aug/12/whatsapp-sharing-stories-with-the-guardian';
const TELEGRAM_GUIDANCE_URL =
	'https://www.theguardian.com/info/2022/mar/15/telegram-sharing-stories-with-the-guardian';
const SECURE_DROP_URL = 'https://www.theguardian.com/securedrop';
const CONTACT_NUMBER = '+447766780300';

const OPEN_WHATSAPP_URL = `https://wa.me/${CONTACT_NUMBER}`;
const OPEN_TELEGRAM_URL = `https://telegram.me/${CONTACT_NUMBER}`;

const CalloutContact: FC<CalloutContactProps> = ({ id, fields, format }) => {
	return (
		<div className="js-message-us-tab">
			<p css={info}>
				You can contact us on WhatsApp or Telegram at {CONTACT_NUMBER}.
				For more information, please see our guidance on{' '}
				<a href={WHATSAPP_GUIDANCE_URL}>contacting us via WhatsApp</a>{' '}
				and our guidance on{' '}
				<a href={TELEGRAM_GUIDANCE_URL}>contacting us via Telegram</a>.
			</p>

			<p css={info}>
				For true anonymity please use our{' '}
				<a href={SECURE_DROP_URL}>SecureDrop</a> service instead.
			</p>

			<LinkButton
				css={calloutPrimaryButton(format)}
				type="submit"
				priority="primary"
				icon={<SvgWhatsApp />}
				href={OPEN_WHATSAPP_URL}
				target="_blank"
			>
				Message us on Whatsapp
			</LinkButton>

			<LinkButton
				css={calloutPrimaryButton(format)}
				type="submit"
				priority="primary"
				icon={<SvgGps />}
				href={OPEN_TELEGRAM_URL}
				target="_blank"
			>
				Message us on Telegram
			</LinkButton>
		</div>
	);
};

export default CalloutContact;
