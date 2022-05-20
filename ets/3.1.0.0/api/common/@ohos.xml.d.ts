/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * The xml module provides utilities for converting XML text to Javascript object, XML generation and parsing.
 * @since 8
 * @sysCap SystemCapability.CCRuntime
 * @devices phone, tablet
 * @import import xml from '@ohos.xml';
 * @permission N/A
 */
declare namespace xml {
    interface ConvertOptions {
        /**
         * Whether to trim whitespace characters that may exist before and after the text, default false.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         */
        trim: boolean;
        /**
         * Whether to ignore writing declaration directives of xml.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         */
        ignoreDeclaration?: boolean;
        /**
         * Whether to ignore writing processing instruction of xml.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         */
        ignoreInstruction?: boolean;
        /**
         * Whether to print attributes across multiple lines and indent them.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         */
        ignoreAttributes?: boolean;
        /**
         * Whether to ignore writing comments of the elements.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         */
        ignoreComment?: boolean;
        /**
         * Whether to ignore writing CData of the elements.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         */
        ignoreCdata?: boolean;
        /**
         * Whether to ignore writing Doctype of the elements.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         */
        ignoreDoctype?: boolean;
        /**
         * Whether to ignore writing texts of the elements.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         */
        ignoreText?: boolean;
        /**
         * Name of the property key which will be used for the declaration.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         */
        declarationKey: string;
        /**
         * Name of the property key which will be used for the processing instruction.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         */
        instructionKey: string;
        /**
         * Name of the property key which will be used for the attributes.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         */
        attributesKey: string;
        /**
         * Name of the property key which will be used for the text.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         */
        textKey: string;
        /**
         * Name of the property key which will be used for the cdata.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         */
        cdataKey: string;
        /**
         * Name of the property key which will be used for the doctype.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         */
        doctypeKey: string;
        /**
         * Name of the property key which will be used for the comment.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         */
        commentKey: string;
        /**
         * Name of the property key which will be used for the parent.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         */
        parentKey: string;
        /**
         * Name of the property key which will be used for the type.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         */
        typeKey: string;
        /**
         * Name of the property key which will be used for the name.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         */
        nameKey: string;
        /**
         * Name of the property key which will be used for the elements.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         */
        elementsKey: string;
    }

    interface ConvertXML {
        /**
         * To convert XML text to JavaScript object.
         * @since 8
         * @sysCap SystemCapability.CCRuntime.
         * @param xml The xml text to be converted.
         * @param option Option Inputted by user to set.
         * @return Returns a JavaScript object converting from XML text.
         */
        convert(xml: string, options?: ConvertOptions) : Object;
    }

    class XmlSerializer {
        /**
         * A parameterized constructor used to create a new XmlSerializer instance.
         * As the input parameter of the constructor function, init supports three types.
         * The input parameter is an Arrarybuff.
         * The input parameter is a DataView.
         * The input parameter is an encoding format of string type.
         */
        constructor(buffer: ArrayBuffer | DataView, encoding?: string);

        /**
         * Write an attribute.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         * @param name Key name of the attribute.
         * @param value Values of attribute.
         */
        setAttributes(name: string, value: string): void;

        /**
         * Add an empty element.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         * @param name Key name of the attribute.
         * @param value Values of element.
         */
        addEmptyElement(name: string): void;

        /**
         * Writes xml declaration with encoding. For example: <?xml version="1.0" encoding="utf-8"?>.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         */
        setDeclaration(): void;

        /**
         * Writes a elemnet start tag with the given name.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         * @param name name of the element.
         */
        startElement(name: string): void;

        /**
         * Writes end tag of the element.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         */
        endElement(): void;

        /**
         * Writes the namespace of the current element tag.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         * @param prefix Values name of the prefix.
         * @param namespace Values of namespace.
         */
        setNamespace(prefix: string, namespace: string): void;

        /**
         * Writes the commnet.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         * @param text Values of commnet.
         */
        setCommnet(text: string): void;

        /**
         * Writes the CDATA.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         * @param text Values of CDATA.
         */
        setCData(text: string): void;

        /**
         * Writes the text.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         * @param text Values of text.
         */
        setText(text: string): void;

        /**
         * Writes the DOCTYPE.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         * @param text Values of docType.
         */
        setDocType(text: string): void;
    }

    enum EventType {
        /**
          * Start a document.
          */
        START_DOCUMENT,
        /**
          * End a document.
          */
        END_DOCUMENT,
        /**
          * Start a tag.
          */
        START_TAG,
        /**
          * End a tag.
          */
        END_TAG,
        /**
          * Character data.
          */
        TEXT,
        /**
          * A CDATA sections.
          */
        CDSECT,
        /**
          * An XML comment.
          */
        COMMENT,
        /**
          * An XML document type declaration.
          */
        DOCDECL,
        /**
          * An XML processing instruction declaration.
          */
        INSTRUCTION,
        /**
          * An entity reference.
          */
        ENTITY_REFERENCE,
        /**
          * a whitespace.
          */
        WHITESPACE,
    }

    /** The current parse info.  */
    interface ParseInfo {
        /**
          * The current column number, starting from 1.
          */
        getColumnNumber(): number;
        /**
          * The current depth of the element.
          */
        getDepth(): number;
        /**
          * The current column number, starting from 1.
          */
        getLineNumber(): number;
        /**
          * The current element name.
          */
        getName(): string;
        /**
          * The current element's name.
          */
        getNamespace(): string;
        /**
          * The current element's namespace.
          */
        getPrefix(): string;
        /**
          * The text content of the current event as String.
          */
        getText(): string;
        /**
          * Returns true if the current element is empty.
          */
        isEmptyElementTag(): boolean;
        /**
          * Checks whether the current TEXT event contains only whitespace characters.
          */
        isWhitespace(): boolean;
        /**
          * Returns the number of attributes of the current start tag.
          */
        getAttributeCount(): number;
    }

    /** parse options for XmlPullParser. */
    interface ParseOptions {

        /**
         * Whether to parsing Doctype of the elements.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         */
        supportDoctype?: boolean;

        /**
         * Whether to ignore parsing texts of the elements.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         */
        ignoreNameSpace?: boolean;

        /**
         * tag value callback function.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         * @param name The current tag name.
         * @param value The current tag value.
         * @return Returns a Boolean variable for whether parse continually.
         */
        tagValueCallbackFunction?: (name: string, value: string) => boolean;

        /**
         * attribute value callback function.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         * @param name The current attribute name.
         * @param value The current attribute value.
         * @return Returns a Boolean variable for whether parse continually.
         */
        attributeValueCallbackFunction?: (name: string, value: string) => boolean;

        /**
         * token value callback function.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         * @param eventType The current token eventtype.
         * @param value The current token parseinfo.
         * @return Returns a Boolean variable for whether parse continually.
         */
        tokenValueCallbackFunction?: (eventType: EventType, value: ParseInfo) => boolean;
    }

    class XmlPullParser {
        /**
          * A constructor used to create a new XmlPullParser instance.
          */
        constructor(buffer: ArrayBuffer | DataView, encoding?: string);

        /**
         * Starts parsing the XML file.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         * @param option parse options for XmlPullParser, the interface including two Boolean variables and three callback functions.
         */
        parse(option: ParseOptions): void;
    }
}
export default xml;