import { DocBuilder } from '@epam/uui-docs';
import { CheckboxProps } from '@epam/uui-components';
import { Checkbox, CheckboxMods } from '../Checkbox';
import { isDisabledDoc, isInvalidDoc, iHasLabelDoc, iEditable, TableContext } from '../../../docs';
import { DefaultContext, FormContext } from '../../../docs';

const CheckboxDoc = new DocBuilder<CheckboxProps & CheckboxMods>({ name: 'Checkbox', component: Checkbox })
    .implements([isDisabledDoc, isInvalidDoc, iHasLabelDoc, iEditable])
    .prop('value', { examples: [true, false] })
    .prop('size', { examples: ['12', '18'], defaultValue: '18' })
    .prop('indeterminate', { examples: [true, false], defaultValue: false })
    .withContexts(DefaultContext, FormContext, TableContext);

export = CheckboxDoc;