import { Editor } from "@tinymce/tinymce-react";
import { Controller } from "react-hook-form";


export default function RTE({ name, control, label, defaultValue = "" }) {
    return (
        <div className="w-full">
            {label && <label className="inline-block mb-1 pl-1">{label}</label>}

            <Controller
                name={name || "content"}
                control={control}
                render={({ field }) => (
                    <Editor
                        apiKey='m82z3qulas5i3d4es5njwyjqzxlljl9oq6x09951mly0nlp8'
                        // initialValue={defaultValue}
                        init={{
                            initialValue: defaultValue,
                            height: 500,
                            menubar: true,
                            mergetags_list: [
                                { value: 'First.Name', title: 'First Name' },
                                { value: 'Email', title: 'Email' },
                            ],
                            plugins: 'anchor autolink charmap image link lists media searchreplace table visualblocks wordcount inlinecss',
                            toolbar: 'undo redo | blocks | bold italic underline | link image media table mergetags | align lineheight | tinycomments | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
                            content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
                        }}
                        // onEditorChange={onChange}
                        onEditorChange={(content) => field.onChange(content)}
                        value={field.value}
                    />
                )}
            />
        </div>
    );
}