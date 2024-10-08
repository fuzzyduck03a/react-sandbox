'use client';
import Link from 'next/link';

import { JsonForms } from '@jsonforms/react';
import { materialCells, materialRenderers } from '@jsonforms/material-renderers';
import { defaultData, defaultSchema, defaultUiSchema } from './schema';
import { useState } from 'react';

export default function TestForm() {
  const [formData, setFormData] = useState(defaultData);

  return (
    <>
      <h1>Testform</h1>
      <JsonForms
        data={formData}
        schema={defaultSchema}
        renderers={materialRenderers}
        uischema={defaultUiSchema}
        onChange={({ data }) => setFormData(data)}
        cells={materialCells}
      />
      <div>
        Back to <Link href="/">Home</Link>
      </div>
    </>
  );
}
