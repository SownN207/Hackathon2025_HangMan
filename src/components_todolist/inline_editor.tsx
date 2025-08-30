"use client";

import React, { useState, useRef, useEffect } from "react";
import { Input } from "~/components/ui/input";


export default function InlineEditor({
    initial,
    onSave,
    onCancel,
}: {
    initial: string;
    onSave: (val: string) => void;
    onCancel: () => void;
}) {
    const [val, setVal] = useState(initial);
    const ref = useRef<HTMLInputElement | null>(null);
    useEffect(() => ref.current?.focus(), []);

    return (
        <form
            onSubmit={(e) => {
            e.preventDefault();
            onSave(val);
            }}
            className="flex-1"
        >
            <Input
                ref={ref}
                value={val}
                onChange={(e) => setVal(e.target.value)}
                onBlur={() => onSave(val)}
            />
        </form>
    );
}