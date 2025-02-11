[**Documentation**](../README.md)

***

[Documentation](../README.md) / IOnPageIdListResultInfo

# Interface: IOnPageIdListResultInfo

Defined in: main.ts:163369

## Indexable

\[`key`: `string`\]: `any`

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:163389

cost of the task, USD

***

### datetime\_done?

> `optional` **datetime\_done**: `string`

Defined in: main.ts:163384

date and time when the task was completed
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-15 12:57:46 +00:00

***

### datetime\_posted?

> `optional` **datetime\_posted**: `string`

Defined in: main.ts:163379

date and time when the task was made
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-15 12:57:46 +00:00

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:163371

id of the task

***

### metadata?

> `optional` **metadata**: `object`

Defined in: main.ts:163391

contains parameters you specified in the POST request

#### Index Signature

\[`key`: `string`\]: `any`

***

### status?

> `optional` **status**: `string`

Defined in: main.ts:163387

informational message of the task
you can find the full list of general informational messages here

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:163374

URL of the task
URL you used for making an API call
