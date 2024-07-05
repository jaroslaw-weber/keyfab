"use client";
import { useAtom } from "jotai";
import KeyboardLayer from "./KeyboardLayer";
import { layerCountAtom, styleAtom } from "../state";
import { useEffect } from "react";

export default function KeyboardView(): JSX.Element {
  const [layerCount] = useAtom(layerCountAtom);
  const result: JSX.Element[] = [];
  for (let i = 0; i < layerCount; i++) {
    const rendered = <KeyboardLayer layerIndex={i} key={i} />;
    result.push(rendered);
  }

  return <div className="flex flex-col min-h-full">{result}</div>;
}
