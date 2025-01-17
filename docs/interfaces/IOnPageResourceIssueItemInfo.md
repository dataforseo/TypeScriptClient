[**Documentation**](../README.md)

***

[Documentation](../README.md) / IOnPageResourceIssueItemInfo

# Interface: IOnPageResourceIssueItemInfo

Defined in: main.ts:166623

## Indexable

\[`key`: `string`\]: `any`

## Properties

### column?

> `optional` **column**: `number`

Defined in: main.ts:166627

column where the error was found

***

### line?

> `optional` **line**: `number`

Defined in: main.ts:166625

line where the error was found

***

### message?

> `optional` **message**: `string`

Defined in: main.ts:166630

text message of the error
the full list of possible HTML errors can be found here

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:166641

status code of the error
possible values:
0 — Unidentified Error;
501 — Html Parse Error;
1501 — JS Parse Error;
2501 — CSS Parse Error;
3501 — Image Parse Error;
3502 — Image Scale Is Zero;
3503 — Image Size Is Zero;
3504 — Image Format Invalid
