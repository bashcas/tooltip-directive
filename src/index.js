const tooltipDirective = {
  mounted(el, binding) {
    el.addEventListener("mouseover", () => {
      let tooltip = el.querySelector(".tooltip-box")
      if (tooltip) {
        tooltip.style.opacity = "1"
        return
      }
      el.style.position = "relative"
      tooltip = document.createElement("div")
      tooltip.style.textAlign = "center"
      tooltip.style.zIndex = "1000"
      tooltip.style.backgroundColor = "rgba(0, 0, 0, 0.5)"
      tooltip.style.opacity = "0"
      tooltip.style.borderRadius = "5px"
      tooltip.style.padding = "0.6em"
      tooltip.style.color = "white"
      tooltip.className = "tooltip-box"
      tooltip.style.position = "absolute"
      tooltip.style.transition = "all 0.5s"
      tooltip.innerHTML = binding.value.text
      let triangle = document.createElement("div")
      triangle.style.width = "0"
      triangle.style.height = "0"
      triangle.style.position = "absolute"
      if (binding.value.position === "up") {
        tooltip.style.left = "50%"
        tooltip.style.bottom = "100%"
        tooltip.style.transform = "translateX(-50%)"
        tooltip.style.marginBottom = "10px"
        triangle.style.borderLeft = "10px solid transparent"
        triangle.style.borderRight = "10px solid transparent"
        triangle.style.borderTop = "10px solid rgba(0, 0, 0, 0.5)"
        triangle.style.left = "50%"
        triangle.style.top = "100%"
        triangle.style.transform = "translateX(-50%)"
        tooltip.appendChild(triangle)
        el.appendChild(tooltip)
        setTimeout(() => {
          tooltip.style.opacity = "1"
        }, 0)
        return
      }
      if (binding.value.position === "down") {
        tooltip.style.top = "100%"
        tooltip.style.left = "50%"
        tooltip.style.transform = "translateX(-50%)"
        tooltip.style.marginTop = "10px"
        triangle.style.borderLeft = "10px solid transparent"
        triangle.style.borderRight = "10px solid transparent"
        triangle.style.borderBottom = "10px solid rgba(0, 0, 0, 0.5)"
        triangle.style.right = "50%"
        triangle.style.bottom = "100%"
        triangle.style.transform = "translateX(50%)"
        tooltip.appendChild(triangle)
        el.appendChild(tooltip)
        setTimeout(() => {
          tooltip.style.opacity = "1"
        }, 0)
        return
      }
      if (binding.value.position === "left") {
        tooltip.style.right = "100%"
        tooltip.style.top = "50%"
        tooltip.style.transform = "translateY(-50%)"
        tooltip.style.marginRight = "10px"
        triangle.style.borderTop = "10px solid transparent"
        triangle.style.borderBottom = "10px solid transparent"
        triangle.style.borderLeft = "10px solid rgba(0, 0, 0, 0.5)"
        triangle.style.left = "100%"
        triangle.style.top = "50%"
        triangle.style.transform = "translateY(-50%)"
        tooltip.appendChild(triangle)
        el.appendChild(tooltip)
        setTimeout(() => {
          tooltip.style.opacity = "1"
        }, 0)
        return
      }
      //right by default
      tooltip.style.left = "100%"
      tooltip.style.top = "50%"
      tooltip.style.transform = "translateY(-50%)"
      tooltip.style.marginLeft = "10px"
      triangle.style.borderTop = "10px solid transparent"
      triangle.style.borderBottom = "10px solid transparent"
      triangle.style.borderRight = "10px solid rgba(0, 0, 0, 0.5)"
      triangle.style.right = "100%"
      triangle.style.top = "50%"
      triangle.style.transform = "translateY(-50%)"
      tooltip.appendChild(triangle)
      el.appendChild(tooltip)
      setTimeout(() => {
        tooltip.style.opacity = "1"
      }, 0)
      return
    })

    el.addEventListener("mouseleave", () => {
      const tooltip = el.querySelector(".tooltip-box")
      tooltip.style.opacity = "0"
      tooltip.style.pointerEvents = "none"
    })
  },
}

export default tooltipDirective
