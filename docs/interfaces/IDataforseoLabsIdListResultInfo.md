**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IDataforseoLabsIdListResultInfo

# Interface: IDataforseoLabsIdListResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### cost?

> **`optional`** **cost**: `number`

cost of the task, USD

#### Source

main.ts:80617

***

### datetime\_done?

> **`optional`** **datetime\_done**: `string`

date and time when the task was completed
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-15 12:57:46 +00:00

#### Source

main.ts:80612

***

### datetime\_posted?

> **`optional`** **datetime\_posted**: `string`

date and time when the task was made
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-15 12:57:46 +00:00

#### Source

main.ts:80607

***

### id?

> **`optional`** **id**: `string`

id of the task

#### Source

main.ts:80599

***

### metadata?

> **`optional`** **metadata**: `Object`

contains parameters you specified in the POST request

#### Index signature

 \[`key`: `string`\]: `any`

#### Source

main.ts:80619

***

### status?

> **`optional`** **status**: `string`

informational message of the task
you can find the full list of general informational messages here

#### Source

main.ts:80615

***

### url?

> **`optional`** **url**: `string`

URL of the task
URL you used for making an API call

#### Source

main.ts:80602
