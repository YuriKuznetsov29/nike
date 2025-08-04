import React from 'react'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../ui/accordion'
import { Checkbox } from '../ui/checkbox'
import { Label } from '../ui/label'

export const Filters = () => {
    return (
        <div className="w-[300px] flex flex-col gap-2">
            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger>Colors</AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-2">
                        <div className="flex gap-2">
                            <Checkbox id="orange" value="orange" />
                            <Label htmlFor="orange">Orange</Label>
                        </div>
                        <div className="flex gap-2">
                            <Checkbox id="green" value="green" />
                            <Label htmlFor="green">Green</Label>
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger>Sizes</AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-2">
                        <div className="flex gap-2">
                            <Checkbox id="us6" value="us6" />
                            <Label htmlFor="us6">US 6</Label>
                        </div>
                        <div className="flex gap-2">
                            <Checkbox id="us11" value="us11" />
                            <Label htmlFor="us11">US 11</Label>
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
}
