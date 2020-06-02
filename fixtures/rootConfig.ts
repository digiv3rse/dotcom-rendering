export const rootConfig: RootConfigType = {
    page: {
        campaigns: [
            {
                id: '14d1b1bc-8983-43fb-8f2e-8ca08a711944',
                name: 'CALLOUT: early coronavirus events',
                rules: [],
                priority: 0,
                activeFrom: 1588118400000,
                displayOnSensitive: false,
                fields: {
                    formId: 3860296,
                    callout: 'Were you infected at this time?',
                    _type: 'callout',
                    description:
                        '<p>If you attended one of these events and believe you may have been infected by coronavirus, we\'d like to hear from you. You can get in touch by filling in the form below, or by contacting us&nbsp;<a href="https://www.theguardian.com/info/2015/aug/12/whatsapp-sharing-stories-with-the-guardian">via WhatsApp</a>&nbsp;by&nbsp;<a href="https://api.whatsapp.com/send?phone=447867825056">clicking here&nbsp;</a>or adding the contact +44(0)7867825056. Only the Guardian can see your contributions and one of our journalists may contact you to discuss further. </p>',
                    formFields: [
                        {
                            text_size: 50,
                            name: 'name',
                            description: 'You can use your first name only',
                            hide_label: '0',
                            label: 'Name',
                            id: '91884870',
                            type: 'text',
                            required: '1',
                        },
                        {
                            text_size: 50,
                            name: 'where_do_you_live',
                            description: 'Town or area is fine',
                            hide_label: '0',
                            label: 'Where do you live?',
                            id: '91884872',
                            type: 'text',
                            required: '1',
                        },
                        {
                            text_size: 50,
                            name:
                                'tell_us_a_bit_about_yourself_age_and_what_you_do_etc',
                            hide_label: '0',
                            label:
                                'Tell us a bit about yourself (age and what you do etc.)',
                            id: '91884871',
                            type: 'text',
                            required: '0',
                        },
                        {
                            text_size: 50,
                            name: 'which_event_did_you_attend_and_when',
                            hide_label: '0',
                            label: 'Which event did you attend and when?',
                            id: '91884886',
                            type: 'text',
                            required: '1',
                        },
                        {
                            name: 'share_your_experiences_here',
                            description:
                                'Please include as much detail as possible',
                            hide_label: '0',
                            label: 'Share your experiences here',
                            id: '91884874',
                            type: 'textarea',
                            required: '1',
                        },
                        {
                            text_size: '30',
                            name:
                                'you_can_upload_a_photo_here_if_you_think_it_will_add_to_your_story',
                            hide_label: '0',
                            label:
                                'You can upload a photo here if you think it will add to your story',
                            id: '91884877',
                            type: 'file',
                            required: '0',
                        },
                        {
                            name: 'can_we_publish_your_response',
                            options: [
                                {
                                    label: 'Yes, entirely',
                                    value: 'Yes, entirely',
                                },
                                {
                                    label: 'Yes, but please keep me anonymous',
                                    value: 'Yes, but please keep me anonymous',
                                },
                                {
                                    label: 'Yes, but please contact me first',
                                    value: 'Yes, but please contact me first',
                                },
                                {
                                    label: 'No, this is information only',
                                    value: 'No, this is information only',
                                },
                            ],
                            hide_label: '0',
                            label: 'Can we publish your response?',
                            id: '91884878',
                            type: 'radio',
                            required: '1',
                        },
                        {
                            name: 'can_we_publish_your_response',
                            options: [
                                {
                                    label: 'Yes, entirely',
                                    value: 'Yes, entirely',
                                },
                                {
                                    label: 'Yes, but please keep me anonymous',
                                    value: 'Yes, but please keep me anonymous',
                                },
                                {
                                    label: 'Yes, but please contact me first',
                                    value: 'Yes, but please contact me first',
                                },
                                {
                                    label: 'No, this is information only',
                                    value: 'No, this is information only',
                                },
                            ],
                            hide_label: '0',
                            label: 'Can we publish your response?',
                            id: '91884878',
                            type: 'checkbox',
                            required: '1',
                        },
                        {
                            text_size: 50,
                            name: 'email_address_',
                            description:
                                'Your contact details are helpful so we can contact you for more information. They will only be seen by the Guardian.',
                            hide_label: '0',
                            label: 'Email address ',
                            id: '91884879',
                            type: 'text',
                            required: '1',
                        },
                        {
                            text_size: 50,
                            name: 'phone_number',
                            description:
                                'Your contact details are helpful so we can contact you for more information. They will only be seen by the Guardian.',
                            hide_label: '0',
                            label: 'Phone number',
                            id: '91884880',
                            type: 'text',
                            required: '0',
                        },
                        {
                            name: 'do_you_have_anything_else_to_add',
                            hide_label: '0',
                            label: 'Do you have anything else to add?',
                            id: '91884881',
                            type: 'textarea',
                            required: '0',
                        },
                        {
                            name: 'do_you_have_anything_else_to_add',
                            hide_label: '0',
                            label: 'Do you have anything else to add?',
                            id: '91884881',
                            type: 'select',
                            options: [
                                {
                                    label: 'Yes, entirely',
                                    value: 'Yes, entirely',
                                },
                                {
                                    label: 'Yes, but please keep me anonymous',
                                    value: 'Yes, but please keep me anonymous',
                                },
                                {
                                    label: 'Yes, but please contact me first',
                                    value: 'Yes, but please contact me first',
                                },
                                {
                                    label: 'No, this is information only',
                                    value: 'No, this is information only',
                                },
                            ],
                            required: '0',
                        },
                    ],
                    tagName: 'callout-early-coronavirus-events',
                },
            },
        ],
    },
};
