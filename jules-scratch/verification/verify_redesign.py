from playwright.sync_api import sync_playwright

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    context = browser.new_context(viewport={'width': 1280, 'height': 720})
    page = context.new_page()
    page.set_default_timeout(120000) # Increased timeout to 2 minutes

    print("Navigating to homepage...")
    page.goto("http://localhost:3000/")
    page.wait_for_load_state('networkidle')
    print("Homepage loaded.")
    page.screenshot(path="jules-scratch/verification/homepage.png")
    print("Homepage screenshot taken.")

    print("Navigating to /full-portfolio...")
    page.goto("http://localhost:3000/full-portfolio")
    page.wait_for_load_state('networkidle')
    print("Full portfolio page loaded.")
    page.screenshot(path="jules-scratch/verification/full-portfolio.png")
    print("Full portfolio screenshot taken.")

    print("Navigating to /full-portfolio?category=blog...")
    page.goto("http://localhost:3000/full-portfolio?category=blog")
    page.wait_for_load_state('networkidle')
    print("Full portfolio blog page loaded.")
    page.screenshot(path="jules-scratch/verification/full-portfolio-blog.png")
    print("Full portfolio blog screenshot taken.")

    context.close()
    browser.close()

with sync_playwright() as playwright:
    run(playwright)
