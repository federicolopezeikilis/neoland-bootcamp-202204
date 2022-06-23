import { SecondaryButton, Fieldset, Input, Label, CheckboxInput, BlueAnchor } from '../../components'
import Link from 'next/link'

export function RegisterForm({ className, children, ...props }) {
    return (
        <form className={`w-full flex flex-col items-around gap-5 ${className}`} {...props}>
            <div className="w-full flex flex-col items-start gap-4">
                <Fieldset className="w-full flex flex-col">
                    <Label className="font-medium" htmlFor="username">Username</Label>
                    <Input type="text" name="username" id="username" placeholder="username" required />
                </Fieldset>
                <Fieldset className="w-full flex flex-col">
                    <Label className="font-medium" htmlFor="email">Email</Label>
                    <Input type="email" name="email" id="email" placeholder="your email" required />
                </Fieldset>
                <Fieldset className="w-full flex flex-col">
                    <Label className="font-medium" htmlFor="password">Password</Label>
                    <Input type="password" name="password" id="password" placeholder="at least 8 characters" required />
                </Fieldset>
                <Fieldset className="w-full flex flex-col">
                    <Label className="font-medium" htmlFor="repeatPassword">Repeat Password</Label>
                    <Input type="password" name="repeatPassword" id="repeatPassword" placeholder="at least 8 characters" required />
                </Fieldset>
                <Fieldset>
                    <CheckboxInput name="agreeTermsAndPrivacy" id="agreeTermsAndPrivacy" value="agreeTermsAndPrivacy" />
                    <Label className="text-xs text-myblack" htmlFor="agreeTermsAndPrivacy">I agree with <span className="text-xs text-myblue font-bold">Terms</span> and <span className="text-xs text-myblue font-bold">Privacy</span></Label>
                </Fieldset>
            </div>
            <SecondaryButton type="submit">Sign Up</SecondaryButton>
          
        </form>
    )
}