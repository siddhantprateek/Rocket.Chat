import { Box } from '@rocket.chat/fuselage';
import { useTranslation } from '@rocket.chat/ui-contexts';
import React from 'react';

import { AsyncStatePhase } from '../../../hooks/useAsyncState';
import { useEndpointData } from '../../../hooks/useEndpointData';
import EmailInboxForm from './EmailInboxForm';
import { FormSkeleton } from './Skeleton';

function EmailInboxEditWithData({ id }) {
	const t = useTranslation();
	const { value: data, error, phase: state } = useEndpointData(`email-inbox/${id}`);

	if ([state].includes(AsyncStatePhase.LOADING)) {
		return <FormSkeleton />;
	}

	if (error || !data) {
		return <Box mbs='x16'>{t('EmailInbox_not_found')}</Box>;
	}

	return <EmailInboxForm id={id} data={data} />;
}

export default EmailInboxEditWithData;
