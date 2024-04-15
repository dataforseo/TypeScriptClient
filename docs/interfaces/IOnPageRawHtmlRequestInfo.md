**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IOnPageRawHtmlRequestInfo

# Interface: IOnPageRawHtmlRequestInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### id?

> **`optional`** **id**: `string`

ID of the task
required field
you can get this ID in the response of the Task POST endpoint
example:
“07131248-1535-0216-1000-17384017ad04”

#### Source

main.ts:156778

***

### url?

> **`optional`** **url**: `string`

page url
required field
the absolute URL of a page to request HTML
Note: this field is optional if the task was set using the Instant Pages endpoint

#### Source

main.ts:156783
